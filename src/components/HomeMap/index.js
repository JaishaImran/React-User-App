// import {StyleSheet, Image} from 'react-native';
// import React from 'react';
// import cars from '../../assets/data/cars';
// import MapView, {Marker} from 'react-native-maps';

// const HomeMap = ({userLocation}) => {
//   const defaultLocation = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   const getImage = type => {
//     if (type === 'Black-Car') {
//       return require('../../assets/images/Car-1.png');
//     }
//     if (type === 'Comfort') {
//       return require('../../assets/images/Car-2.png');
//     }
//     if (type === 'Go-Plus') {
//       return require('../../assets/images/Car-3.png');
//     }
//   };

//   return (
//     <MapView
//       region={{
//         latitude: 28.450627,
//     longitude: -16.263045,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//       style={styles.map}
//       showsUserLocation={true}>
//       {cars.map(car => (
//         <Marker
//           key={car.id}
//           coordinate={{latitude: car.latitude, longitude: car.longitude}}>
//           <Image
//             style={{
//               width: 50,
//               height: 50,
//               resizeMode: 'contain',
//               transform: [{rotate: `${car.heading}deg`}],
//             }}
//             source={getImage(car.type)}
//           />
//         </Marker>
//       ))}
//     </MapView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 100,
//     width: 100,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default HomeMap;

import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const HomeMap = ({userLocation}) => {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Use a default location or userLocation if available
  const region = userLocation || defaultLocation;

  return (
    <MapView region={userLocation} style={styles.map} showsUserLocation={true}>
      {/* Example Marker for the user's current location */}
      {userLocation && (
        <Marker coordinate={userLocation} title="Your Location" />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeMap;
