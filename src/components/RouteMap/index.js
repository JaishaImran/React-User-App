import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBG4Ko9K5jjte2LWH-SbFpXShr8JXSWpuI';

const RouteMap = ({ origin, destination }) => {
  const [originLoc, setOriginLoc] = useState(null);
  const [destinationLoc, setDestinationLoc] = useState(null);

  useEffect(() => {
    // Check if origin and destination are selected
    if (origin && destination) {
      setOriginLoc({
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
      });
      setDestinationLoc({
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng,
      });
    }
  }, [origin, destination]);

  if (!originLoc || !destinationLoc) {
    return null; // Don't render map until both locations are set
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={styles.map}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.22,
        longitudeDelta: 0.22,
      }}
    >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#00b38a"
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject, // Full-screen map view
  },
});

export default RouteMap;
