import { View, Text, Image, Pressable, FlatList } from 'react-native'; 
import React, { useState, useEffect } from 'react';
import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext'; 

const SearchResults = ({ navigation }) => {
  const route = useRoute();
  const { originPlace, destinationPlace } = route.params;

  const { user, requestId } = useUser();

  const [selectedCar, setSelectedCar] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [fluctuatingFares, setFluctuatingFares] = useState({});

  const fetchDrivers = async () => {
    try {
      if (!requestId) {
        console.error('No request ID found');
        return;
      }
      setLoading(true); 
      const response = await axios.get(
        `https://black-car.us/rides/ride-requests/${requestId}`,
        {
          auth: { username: user?.username, password: user?.password }, 
        }
      );

      setDrivers(response.data?.offered_drivers || []);
      setFluctuatingFares(response.data?.fluctuating_fares || {});  

    } catch (err) {
      console.error('Error fetching drivers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, [requestId]); 

  const handleConfirmRide = async () => {
    if (selectedCar) {
      try {
        const driverId = selectedCar.driver_id; 
        console.log('Selected Car:', selectedCar); 
        console.log('Driver ID:', driverId); 
        console.log('Request ID:', requestId);

        const response = await axios.post(
          `https://black-car.us/rides/ride-requests/${requestId}/confirm-driver/`,
          { driver_id: driverId }, 
          { auth: { username: user?.username, password: user?.password } } 
        );

        console.log('Response from server:', response); 

        if (response.status === 200) {
          setSuccess('Driver successfully confirmed!');
          Toast.show({
            type: 'success',
            text1: 'Ride Confirmed',
            text2: 'Your ride has been confirmed successfully.',
          });

          navigation.navigate('RideInProgress', {
            selectedCar,
            originPlace,
            destinationPlace,
          });
        }
      } catch (err) {
        console.error('Error confirming ride:', err); 

        Toast.show({
          type: 'error',
          text1: 'Failed to confirm ride',
          text2: 'There was an error confirming the ride.',
        });
      }
    } else {
      console.log('No car selected'); 

      Toast.show({
        type: 'error',
        text1: 'No Car Selected',
        text2: 'Please select a car before confirming.',
      });
    }
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
  
      <View style={styles.heading}>
        <Text style={styles.headingText}>Choose Your Perfect Black Car</Text>
      </View>
  
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading drivers...</Text>
        </View>
      ) : (
        <FlatList
          data={drivers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.driverCard}>
              {item.cars.length > 0 && (
                <View>
                  {item.cars.length > 0 && (
                    <Pressable
                      style={[
                        selectedCar?.driver_id === item.id && styles.selectedCar,
                        styles.carContainer,
                      ]}
                      onPress={() => handleSelectCar(item.cars[0])}
                    >
                      <Image
                        source={require('../../assets/images/CarMonologue.png')}
                        style={styles.image}
                      />

                      <View style={styles.carDetailsContainer}>
                        <Text style={styles.driverName}>
                          {item.name}
                          {'  '}
                          <Ionicons name="star" size={14} color="gold" /> {item.rating || '4.5'}
                          {'  '} ({item.rides || Math.floor(Math.random() * 500 + 1)} rides)
                        </Text>

                        <Text style={styles.carDetails}>{item.cars[0].vehicle_make_model}</Text>

                        <View style={styles.pricePersonContainer}>
                          <Text style={styles.price}>
                            {item.type} <Ionicons name={'person'} size={15} /> 4
                          </Text>

                          <View
                            style={[styles.rightContainer, { flexDirection: 'row', alignItems: 'center' }]}
                          >
                            <Ionicons name="pricetag" size={20} color="green" />
                            <Text style={[styles.price, { marginLeft: 3 }]}>
                              ${fluctuatingFares[item.id] || 'N/A'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Pressable>
                  )}
                </View>
              )}
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 80 }} 
        />
      )}
  
      <View
        style={[
          styles.buttonRow,
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute', 
            bottom: 10,
            left: 0,
            right: 0,
          },
        ]}
      >
        <Pressable style={styles.reloadBtn} onPress={fetchDrivers}>
          <Ionicons name="reload" size={25} color="white" />
        </Pressable>
  
        <Pressable style={styles.confirmBtn} onPress={handleConfirmRide}>
          <Text style={styles.confirmBtnText}>
            {selectedCar ? 'Confirm Ride' : 'Choose a Ride'}
          </Text>
        </Pressable>
  
        <View style={styles.backButton}>
          <Ionicons
            name="chevron-back"
            size={25}
            color="white"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchResults;