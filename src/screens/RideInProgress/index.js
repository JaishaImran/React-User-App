import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import styles from './styles';
import ConfirmationModal from '../../components/ConfirmationModal';
import { useUser } from '../../contexts/UserContext';
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet } from 'react-native';

// Make sure the API key is securely handled in production
Geocoder.init('AIzaSyBG4Ko9K5jjte2LWH-SbFpXShr8JXSWpuI');

const handleCallDriver = (phoneNumber) => {
  if (phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
      console.error("Couldn't load the dialer", err)
    );
  } else {
    console.error('Driver phone number is unavailable');
  }
};

const RideInProgress = ({ navigation }) => {
  const [rideData, setRideData] = useState(null);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropoffCoords, setDropoffCoords] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { user, requestId } = useUser();

  useEffect(() => {
    const fetchRideData = async () => {
      try {
        const response = await fetch(
          `https://black-car.us/rides/ride-requests/${requestId}`
        );
        const data = await response.json();
        setRideData(data);

        if (data.pickup_location) {
          const { results } = await Geocoder.from(data.pickup_location);
          const location = results[0].geometry.location;
          setPickupCoords(location);
        } else {
          console.warn('No pickup location found in ride data');
        }

        if (data.dropoff_location) {
          const { results } = await Geocoder.from(data.dropoff_location);
          const location = results[0].geometry.location;
          setDropoffCoords(location);
        } else {
          console.warn('No dropoff location found in ride data');
        }
      } catch (error) {
        console.error('Error fetching ride data or geocoding:', error);
      }
    };

    fetchRideData();
  }, [requestId]);

  const handleCancelRide = (reason) => {
    console.log('Ride cancelled due to:', reason);
    setModalVisible(false);
    navigation.goBack();
  };

  const proceed = () => {
    navigation.navigate('PaymentScreen');
  };

  if (!rideData || !pickupCoords || !dropoffCoords) {
    return <Text>Loading...</Text>;
  }

  const { confirmed_driver, pickup_location, dropoff_location } = rideData;
  const driverPhoneNumber = confirmed_driver?.mobile;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pickupCoords.lat,
          longitude: pickupCoords.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
      >
        {/* Pickup Location Marker */}
        <Marker
          coordinate={{
            latitude: pickupCoords.lat,
            longitude: pickupCoords.lng,
          }}
          title="Pickup Location"
          description={pickup_location}
        />

        {/* Dropoff Location Marker */}
        <Marker
          coordinate={{
            latitude: dropoffCoords.lat,
            longitude: dropoffCoords.lng,
          }}
          title="Dropoff Location"
          description={dropoff_location}
        />

        {/* Directions Line between Pickup and Dropoff */}
        <MapViewDirections
          origin={{
            latitude: pickupCoords.lat,
            longitude: pickupCoords.lng,
          }}
          destination={{
            latitude: dropoffCoords.lat,
            longitude: dropoffCoords.lng,
          }}
          apikey={'AIzaSyBG4Ko9K5jjte2LWH-SbFpXShr8JXSWpuI'}  // Securely handle API key
          strokeWidth={3}
          strokeColor="#00b38a"
        />
      </MapView>

      <View style={styles.driverInfo}>
        <Image
          source={require('../../assets/images/CarMonologue.png')}
          style={styles.driverImage}
        />
        <View style={styles.driverDetails}>
          <Text style={styles.driverName}>{confirmed_driver?.name}</Text>
          <Text style={styles.driverRating}>
            <Ionicons name="star" size={15} color="gold" /> 4.8
          </Text>
        </View>
        <View style={styles.carDetails}>
          <Text style={styles.carModel}>
            {confirmed_driver?.cars[0]?.vehicle_make_model || 'N/A'}
          </Text>
          <Text style={styles.licensePlate}>
            {confirmed_driver?.cars[0]?.registration_number || 'N/A'}
          </Text>
        </View>
      </View>

      <View style={styles.tripInfo}>
        <Text style={styles.eta}>Estimated Arrival: 50 mins</Text>
        <Text style={styles.destination}>Destination: {dropoff_location}</Text>
      </View>

      <View style={styles.controls}>
        <Pressable style={styles.callBtn} onPress={() => handleCallDriver(driverPhoneNumber)}>
          <Ionicons name="call" size={20} color="white" />
          <Text style={styles.callBtnText}>Call Driver</Text>
        </Pressable>

        <Pressable style={styles.message} onPress={() => handleCallDriver(driverPhoneNumber)}>
          <Ionicons name="chatbox" size={20} color="white" />
          <Text style={styles.callBtnText}>Text Driver</Text>
        </Pressable>

        <Pressable style={styles.cancelBtn} onPress={() => setModalVisible(true)}>
          <Ionicons name="close" size={22} color="white" />
          <Text style={styles.cancelBtnText}>Cancel Ride</Text>
        </Pressable>
      </View>

      <View style={styles.paymentButtonContainer}>
        <Pressable
          style={{
            backgroundColor: '#2a2a2a',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 50,
            borderWidth: 0.8,
            borderColor: 'white',
          }}
          onPress={proceed}
        >
          <Ionicons name="cash" size={20} color="lightgreen" />
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            Proceed to pay
          </Text>
        </Pressable>
      </View>

      <ConfirmationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleCancelRide}
      />
    </View>
  );
};

export default RideInProgress;
