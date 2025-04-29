import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CarTypeRows = ({type, isSelected, onSelect}) => {
  const getImage = () => {
    if (type.type === 'Black Eco') {
      return require('../../assets/images/CarMonologue.png');
    }
    if (type.type === 'Black Prime') {
      return require('../../assets/images/CarMonologue.png');
    }
    if (type.type === 'Black Luxury') {
      return require('../../assets/images/CarMonologue.png');
    }
    if (type.type === 'Black XXL') {
      return require('../../assets/images/CarMonologue.png');
    }
    if (type.type === 'Black Elite') {
      return require('../../assets/images/CarMonologue.png');
    }
    if (type.type === 'Black XL') {
      return require('../../assets/images/CarMonologue.png');
    }
  };

  const calculateDropOffTime = () => {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + type.duration);
    
    const hours = currentTime.getHours() % 12 || 12;
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <Pressable
      onPress={onSelect}
      style={[
        styles.container,
        isSelected && {backgroundColor: '#1c1c1c'}, // Change background color if selected
      ]}>
      <Image style={styles.image} source={getImage()} />
      <View>
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type} <Ionicons name={'person'} size={15} />
            {type.person}
          </Text>
          <Text style={styles.time}>{calculateDropOffTime()} drop off</Text>
        </View>

        <View style={styles.rightContainer}>
          <Ionicons name={'pricetag'} size={18} color={'green'} />
          <Text style={styles.price}>est. {type.price} $</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CarTypeRows;
