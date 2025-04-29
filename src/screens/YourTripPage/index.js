// import React from 'react';
// import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
// import styles from './styles';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {DrawerActions, useNavigation} from '@react-navigation/native';

// const YourTripPage = () => {
//   const navigation = useNavigation();
//   const trips = [
//     {
//       destination: 'Paris, France',
//       date: '2024-10-15',
//       status: 'Upcoming',
//     },
//     {
//       destination: 'New York, USA',
//       date: '2024-08-22',
//       status: 'Completed',
//     },
//     {
//       destination: 'Tokyo, Japan',
//       date: '2024-06-10',
//       status: 'Completed',
//     },
//     {
//       destination: 'Sydney, Australia',
//       date: '2024-12-05',
//       status: 'Upcoming',
//     },
//     {
//       destination: 'Rome, Italy',
//       date: '2024-09-01',
//       status: 'Completed',
//     },
//     {
//       destination: 'London, UK',
//       date: '2024-11-20',
//       status: 'Upcoming',
//     },
//     {
//       destination: 'Dubai, UAE',
//       date: '2024-07-15',
//       status: 'Completed',
//     },
//     {
//       destination: 'Barcelona, Spain',
//       date: '2024-10-30',
//       status: 'Upcoming',
//     },
//     {
//       destination: 'Amsterdam, Netherlands',
//       date: '2024-05-25',
//       status: 'Completed',
//     },
//     {
//       destination: 'Cape Town, South Africa',
//       date: '2024-12-20',
//       status: 'Upcoming',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={{flex: 1}}>
//         <TouchableOpacity
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: 1,
//           }}
//           onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
//           <Icon
//             name="menu"
//             size={30}
//             color={'white'}
//             style={{backgroundColor: 'black', borderRadius: 30, padding: 2}}
//           />
//         </TouchableOpacity>
//       </View>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <Text style={styles.title}>Your Trips</Text>
//         {trips.map((trip, index) => (
//           <View key={index} style={styles.tripContainer}>
//             <Text style={styles.destination}>{trip.destination}</Text>
//             <Text style={styles.date}>Date: {trip.date}</Text>
//             <Text style={styles.status}>Status: {trip.status}</Text>
//             <View style={styles.separator} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default YourTripPage;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import axios from 'axios';

// const BASE_URL = "https://0e51-2400-adc1-17b-8700-5042-608b-f9c0-f45c.ngrok-free.app/users/users-request/";

// const YourTripPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [responseData, setResponseData] = useState(null);

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [age, setAge] = useState('');

//   const handleCreateUser = async () => {
//     setLoading(true);
//     setError(null);

//     const userPayload = {
//       username,
//       email,
//       mobile,
//       age: parseInt(age, 10),
//     };

//     try {
//       const response = await axios.post(BASE_URL, userPayload, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         auth: {
//           username: 'jeni',
//           password: 'jeni@123',
//         },
//       });

//       if (response.status === 201) {
//         setResponseData(response.data);
//         Alert.alert('Success', 'User created successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to create user');
//       }
//     } catch (err) {
//       setError('Failed to create user. Please try again.');
//       Alert.alert('Error', 'Failed to create user. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create User</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         placeholderTextColor="grey"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         placeholderTextColor="grey"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile"
//         value={mobile}
//         onChangeText={setMobile}
//         keyboardType="phone-pad"
//         placeholderTextColor="grey"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         value={age}
//         onChangeText={setAge}
//         keyboardType="numeric"
//         placeholderTextColor="grey"
//       />

//       <Button title="Create User" onPress={handleCreateUser} color="grey" />

//       {loading && <ActivityIndicator size="large" color="grey" />}
//       {error && <Text style={styles.errorText}>{error}</Text>}

//       {responseData && (
//         <View style={styles.resultContainer}>
//           <Text style={styles.successText}>User Created:</Text>
//           <Text style={styles.resultText}>ID: {responseData.id}</Text>
//           <Text style={styles.resultText}>Username: {responseData.username}</Text>
//           <Text style={styles.resultText}>Email: {responseData.email}</Text>
//           <Text style={styles.resultText}>Mobile: {responseData.mobile}</Text>
//           <Text style={styles.resultText}>Age: {responseData.age}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'grey',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     color: 'black',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   resultContainer: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 5,
//   },
//   successText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   resultText: {
//     color: 'black',
//     marginTop: 5,
//   },
// });

// export default YourTripPage;


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://black-car.us/rides/ride-requests/';
const auth = {
  username: 'jeni',
  password: 'jeni@123',
};

const YourTripPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rideRequestId, setRideRequestId] = useState(null);

  const rideRequestData = {
    user: 1,  
    pickup_location: 'New Town',
    dropoff_location: 'NEW NEW XXCRTES',
  };

  const createRideRequest = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(BASE_URL, rideRequestData, {
        auth,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const rideData = response.data;
        setRideRequestId(rideData.id);
        Alert.alert('Success', `Ride request created successfully with ID: ${rideData.id}`);
      } else {
        setError('Failed to create ride request');
        Alert.alert('Error', 'Failed to create ride request');
      }
    } catch (err) {
      setError('An error occurred while creating the ride request');
      Alert.alert('Error', 'An error occurred while creating the ride request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Ride Request</Text>
      <Button title="Create Ride Request" onPress={createRideRequest} />
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {rideRequestId && <Text style={styles.successText}>Created Ride Request with ID: {rideRequestId}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
  successText: {
    color: 'green',
    marginTop: 20,
  },
});

export default YourTripPage;