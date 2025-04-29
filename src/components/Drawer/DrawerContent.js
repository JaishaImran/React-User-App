import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { useUser } from '../../contexts/UserContext';
import styles from './styles';

const DrawerList = [
  { icon: 'home-outline', label: 'Explore', navigateTo: 'HomePage' },
  { icon: 'account-tie-hat', label: 'Where To ?', navigateTo: 'WhereTo' },
  { icon: 'car-estate', label: 'Your Trips', navigateTo: 'YourTrips' },
  { icon: 'help-network', label: 'Help-FAQs', navigateTo: 'Help' },
  { icon: 'clipboard-list', label: 'Terms & Conditions', navigateTo: 'Terms' },
];

const DrawerLayout = ({ icon, label, navigateTo, color = 'white' }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ size }) => <Icon name={icon} color={'#8a8a8a'} size={size} />}
      label={label}
      labelStyle={{ color: color }}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = () => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
        color="white"
      />
    );
  });
};

function DrawerContent(props) {
  const { user, clearUser } = useUser(); // Get user data and clearUser function from context
  const [userData, setUserData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    if (user) {
      setUserData({
        email: user.email,
        name: user.username,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0Egl3qzcVrDb-pjSo8qHsPKZ4H-jyLlTug&s', // Default avatar image
      });

      // Show welcome message
      setTimeout(() => {
        Toast.show({
          type: 'success',
          text1: 'Welcome!',
          text2: 'Hey there!',
          visibilityTime: 3000,
        });
      }, 2000);
    }
  }, [user]);

  const signOut = () => {
    // Clear user data
    clearUser();

    // Wait for the data to clear and then navigate to the login screen
    setTimeout(() => {
      navigation.navigate('LoginUser');
      setUserData({}); // Reset user data state after sign-out
    }, 500); // Ensure navigation happens after clearing user data
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: userData.avatarUrl,
                  }}
                  size={60}
                  style={{ marginTop: 5 }}
                />
                <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                  <Title style={styles.title}>{userData.name || 'Guest'}</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    {userData.email || 'Not logged in'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={signOut}
          icon={({ size }) => (
            <Icon name="exit-to-app" color={'white'} size={size} />
          )}
          label="Sign Out"
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          style={{ backgroundColor: '#2a2a2a' }}
        />
      </View>
    </View>
  );
}

export default DrawerContent;
