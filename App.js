import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginPage from './src/screens/Login&Register/LoginPage';
import RegisterPage from './src/screens/Login&Register/RegisterPage';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OnBoarding from './src/screens/OnBoarding';
import MainScreen from './src/screens/MainScreen';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
import TermsPage from './src/screens/TermsPage';
import HelpPage from './src/screens/HelpPage';
import YourTripPage from './src/screens/YourTripPage';
import RideInProgress from './src/screens/RideInProgress';
import PaymentScreen from './src/screens/PaymentPage';
import DrawerContent from './src/components/Drawer/DrawerContent';
import TermsAndConditions from './src/components/Terms&Condtions/Terms';
import SplashScreen from 'react-native-splash-screen';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {StripeProvider} from '@stripe/stripe-react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UserProvider } from './src/contexts/UserContext';

navigator.geolocation = require('@react-native-community/geolocation');

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'green',
        borderLeftWidth: 7,
        width: '90%',
        height: 70,
        borderRightColor: 'green',
        borderRightWidth: 7,
        backgroundColor: 'black',
        borderTopColor: 'green',
        borderBottomColor: 'green',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
      }}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 17,
        fontWeight: '700',
        color: 'white',
      }}
      text2Style={{
        fontSize: 14,
        color: 'white',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: 'red',
        borderLeftWidth: 7,
        width: '90%',
        height: 70,
        borderRightColor: 'red',
        borderRightWidth: 7,
        backgroundColor: 'black',
        borderTopColor: 'red',
        borderBottomColor: 'red',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
      }}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 17,
        fontWeight: '700',
        color: 'white',
      }}
      text2Style={{
        fontSize: 14,
        color: 'white',
      }}
    />
  ),
};

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={MainScreen} />
      <Stack.Screen name="Where To ?" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="LoginUser" component={LoginNav} />
      <Stack.Screen name="Terms" component={TermsPage} />
      <Stack.Screen name="Help" component={HelpPage} />
      <Stack.Screen name="YourTrips" component={YourTripPage} />
      <Stack.Screen name="RideInProgress" component={RideInProgress} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
      <Stack.Screen name={'LoginPage'} component={LoginPage} />
      <Stack.Screen name={'RegisterPage'} component={RegisterPage} />
      <Stack.Screen name={'MainDrawer'} component={DrawerNav} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Drawer.Screen name="HomeDrawer" component={StackNav} />
    </Drawer.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  GoogleSignin.configure({
    webClientId: '784452730429-bdi34d859hve078go2mau7ccv9b06sk5.apps.googleusercontent.com',
  });

  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data, 'at app.js');
    setIsLoggedIn(data);
  }

  const getUsersCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      console.log(position);
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Black Car Location Permission',
            message:
              'Black Car needs access to your location ' +
              'so you can book a ride.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
          getUsersCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to use the map',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // IOS version
      Geolocation.requestAuthorization();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
    getData();
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      Geolocation.requestAuthorization();
    }
    if (isLoggedIn) {
      setShowTerms(true);
    }

     // Use AsyncStorage to get login status
  AsyncStorage.getItem('isLoggedIn').then((value) => {
    if (value) {
      setIsLoggedIn(JSON.parse(value));
    }
  });
  }, []);

  return (
    <UserProvider> 
     <Provider store={store}>
      <StripeProvider publishableKey="">
        <NavigationContainer>
          <TermsAndConditions
            visible={showTerms}
            onClose={() => setShowTerms(false)}
          />
          {isLoggedIn ? <DrawerNav /> : <LoginNav />}
          <Toast config={toastConfig} />
        </NavigationContainer>
      </StripeProvider>
      </Provider>
    </UserProvider>
  );
};

export default App;
