import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 360}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 15,
              left: 15,
              zIndex: 1,
            }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon
              name="menu"
              size={30}
              color={'white'}
              style={{backgroundColor: 'black', borderRadius: 30, padding: 2}}
            />
          </TouchableOpacity>
        </View>
        <HomeMap />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          backgroundColor: 'black',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <Text style={styles.ads1}>
          Experience the pinnacle of luxury transportation with our exclusive
          premium Black Car services.
        </Text>
        <Text style={styles.ads2}>
          Our fleet of meticulously maintained luxury vehicles, coupled with our
          impeccable chauffeurs, ensures a seamless and unforgettable journey.
          Elevate your journey with our unparalleled services.
        </Text>
      </View>
      <View style={{backgroundColor: 'black'}}>
        {/* Input Box */}
        <Pressable onPress={goToSearch} style={styles.inputBox}>
          <Text style={styles.inputText}>Where To ?</Text>
          <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'white'} />
            <Text style={{color: 'white', fontFamily: 'Manrope-SemiBold'}}>
              Now
            </Text>
            <MaterialIcons
              name={'keyboard-arrow-down'}
              size={18}
              color={'white'}
            />
          </View>
        </Pressable>
      </View>
      <View>
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
