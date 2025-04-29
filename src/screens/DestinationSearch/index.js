import { View, SafeAreaView, Text, Alert, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUser } from '../../contexts/UserContext';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { TouchableOpacity } from 'react-native';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const calculateFare = (origin, destination) => {
  const R = 6371; // Radius of the Earth in km
  const lat1 = origin.lat;
  const lon1 = origin.lng;
  const lat2 = destination.lat;
  const lon2 = destination.lng;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in km

  const baseFare = 50; 
  const ratePerKm = 10; 

  return Math.round(baseFare + (distance * ratePerKm)); 
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [fare, setFare] = useState(null);
  const [customFare, setCustomFare] = useState(null);
  const [estimatedFare, setEstimatedFare] = useState(null);
  const { user, saveRequestId } = useUser();  // Access saveRequestId from UserContext
  const navigation = useNavigation();

  const sendPayload = async () => {
    if (!originPlace || !destinationPlace) {
      Alert.alert('Error', 'Please select both pickup and dropoff locations.');
      return;
    }
  
    const finalFare = customFare ?? fare; // Use custom fare if available, otherwise the calculated fare
  
    const requestId = Date.now().toString(); // Generates a unique request ID based on current timestamp
  
    saveRequestId(requestId);  // Save the request ID to the context
  
    const payload = {
      request_id: requestId,  // Add the generated request_id to the payload
      user: user?.id,
      pickup_location: originPlace?.data?.description,
      dropoff_location: destinationPlace?.data?.description,
      fare: finalFare,
    };
  
    console.log('Sending Payload:', JSON.stringify(payload));
  
    const credentials = 'jaisha:jaisha@123';
    const base64Credentials = btoa(credentials);
  
    try {
      const response = await fetch(
        'https://black-car.us/rides/ride-requests/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Credentials}`,
          },
          body: JSON.stringify(payload),
        }
      );
  
      if (response.ok) {
        Alert.alert('Success', 'Booking created successfully.');
        navigation.navigate('SearchResults', { originPlace, destinationPlace });
      } else {
        Alert.alert('Error', 'Failed to create booking.');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred.');
      console.error(error);
    }
  };

  useEffect(() => {
    if (originPlace && destinationPlace) {
      const calculatedFare = calculateFare(
        originPlace.details.geometry.location,
        destinationPlace.details.geometry.location
      );
      setFare(calculatedFare);
      setEstimatedFare(calculatedFare);
    }
  }, [originPlace, destinationPlace]);

  const placeholderColor = 'grey';

  const handleConfirmFare = () => {
    Alert.alert(
      'Confirm Fare',
      `The estimated fare is ${fare}. Do you want to adjust it?`,
      [
        {
          text: 'Adjust',
          onPress: () => {
            Alert.prompt(
              'Enter Custom Fare',
              'Enter your desired fare:',
              [
                { text: 'Cancel' },
                {
                  text: 'OK',
                  onPress: (input) => {
                    const customFareValue = parseFloat(input);
                    if (!isNaN(customFareValue) && customFareValue > 0) {
                      setCustomFare(customFareValue);
                    } else {
                      Alert.alert('Invalid Fare', 'Please enter a valid fare.');
                    }
                  },
                },
              ],
              'plain-text',
              fare.toString()
            );
          },
        },
        { text: 'Confirm', onPress: sendPayload },
      ]
    );
  };

  const handleIncreaseFare = () => {
    setFare((prevFare) => prevFare + 10); // Increase fare by 10
  };

  const handleDecreaseFare = () => {
    if (fare > estimatedFare) {  
      setFare((prevFare) => prevFare - 10); 
    } else {
      Alert.alert('Minimum Fare Reached', `Fare cannot be decreased further than the estimated fare of ${estimatedFare}.`);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          paddingTop: 15,
          paddingBottom: 10,
          gap: 80,
          paddingLeft: 15,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={22}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: 'white',
            backgroundColor: 'black',
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'Manrope-SemiBold',
          }}
        >
          Select Destination
        </Text>
      </View>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="From?"
        minLength={2}
        fetchDetails
        onPress={(data, details = null) => {
          setOriginPlace({ data, details });
        }}
        query={{
          key: 'AIzaSyBG4Ko9K5jjte2LWH-SbFpXShr8JXSWpuI',
          language: 'en',
        }}
        predefinedPlaces={[homePlace, workPlace]}
        currentLocation={true}
        currentLocationLabel="Current Location"
        enablePoweredByContainer={false}
        suppressDefaultStyles={true}
        textInputProps={{
          placeholderTextColor: placeholderColor,
        }}
        styles={{
          textInput: styles.textInput,
          container: styles.autoContainer,
          listView: styles.listView,
          separator: styles.seperator,
        }}
        renderRow={(data) => <PlaceRow data={data} />}
        renderDescription={(data) => data.description || data.vicinity}
      />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          textInputProps={{ placeholderTextColor: placeholderColor }}
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
          }}
          suppressDefaultStyles
          enablePoweredByContainer={false}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoContainer,
              top: 55,
            },
            separator: styles.seperator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBG4Ko9K5jjte2LWH-SbFpXShr8JXSWpuI',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {fare && (
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            borderWidth: 0.5,
            borderColor: 'gray',
            borderRadius: 15,
            backgroundColor: 'transparent',
            paddingVertical: 8,
            justifyContent: 'space-around',
            marginTop: 370,
            width: 325,
            padding: 20,
            left: 20
          }}>
            <Text style={{ fontSize: 16, fontWeight: '600' , color: 'white' }}>
              Est. Fare: {fare}$
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="remove-circle-outline"
                size={30}
                color="red"
                onPress={handleDecreaseFare}
                style={{ marginHorizontal: 2 }}
              />
              <Ionicons
                name="add-circle-outline"
                size={30}
                color="green"
                onPress={handleIncreaseFare}
                style={{ marginHorizontal: 2 }}
              />
            </View>
            <TouchableOpacity
              onPress={handleConfirmFare}
              style={{
                width: 100,
                borderRadius: 50,
                backgroundColor: 'gray',
                paddingVertical: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
