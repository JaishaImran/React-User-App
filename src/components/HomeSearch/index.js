import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScearch = () => {
  // const navigation = useNavigation()
  // const goToSearch = () => {
  //   navigation.navigate('DestinationSearch')
  // };

  return (
    <LinearGradient colors={['#1a1a1a', '#5a5a5a']}>
      {/* Input Box */}
      {/* <Pressable onPress={() => props.navigation.navigate('DestinationSearch')} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To ?</Text>

        <View style={styles.timeContainer}>
            <AntDesign name={"clockcircle"} size={16} color={"white"}/>
            <Text style={{color: 'black', fontFamily: 'Manrope-SemiBold'}}>Now</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={18} color={'black'}/>
        </View>
       </Pressable> */}

      {/* Prev Destination */}
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name={'clockcircle'} size={20} color={'black'} />
          </View>
          <Text style={styles.destinationText}>New York, Times Square</Text>
        </View>

        {/* Home Destination */}
        <View style={styles.row}>
          <View style={[styles.iconContainer, {backgroundColor: 'black'}]}>
            <Entypo name={'home'} size={20} color={'white'} />
          </View>
          <Text style={styles.destinationText}>Home</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.iconContainer, {backgroundColor: 'black'}]}>
            <Entypo name={'location-pin'} size={20} color={'white'} />
          </View>
          <Text style={styles.destinationText}>Work</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScearch;
