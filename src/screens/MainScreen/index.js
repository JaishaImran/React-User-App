import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MainScreen = () => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('Where To ?');
  };

  const navigateToDetails = screen => {
    navigation.navigate(screen);
  };

  // Define items with subtexts
  const planYourTripItems = [
    {
      text: 'Get a chauffeur',
      subtext: 'Enjoy personalized service with a dedicated chauffeur.',
      image: require('../../assets/images/Chauffeur.jpg'),
    },
    {
      text: 'High-end SUVs',
      subtext: 'Travel in luxury with our premium SUVs.',
      image: require('../../assets/images/SUV.jpg'),
    },
    {
      text: 'For XL groups',
      subtext: 'Ideal for large groups and families.',
      image: require('../../assets/images/XLGroups.jpg'),
    },
    {
      text: 'Easy Car rentals',
      subtext: 'Flexible car rental options for your convenience.',
      image: require('../../assets/images/CarRental.jpg'),
    },
  ];

  const moreWaysItems = [
    {
      text: 'Go in luxury',
      subtext: 'Experience the finest in luxury travel.',
      image: require('../../assets/images/GoInLuxury.jpg'),
    },
    {
      text: 'Teen accounts',
      subtext: 'Special accounts designed for teen riders.',
      image: require('../../assets/images/TeenAccount.jpg'),
    },
    {
      text: 'Send a package',
      subtext: 'Secure and fast package delivery.',
      image: require('../../assets/images/Package.jpg'),
    },
    {
      text: 'Choose comfort',
      subtext: 'Travel comfortably with added amenities.',
      image: require('../../assets/images/ChooseComfort.jpg'),
    },
    {
      text: 'Safety Toolkit',
      subtext: 'Tools and resources to ensure your safety.',
      image: require('../../assets/images/SafetyToolkit.jpg'),
    },
  ];

  const [pressed, setPressed] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
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
        {/* Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>BLACK CARS</Text>
        </View>
      </View>
      {/* Search Bar */}
      <TouchableOpacity
        onPress={goToSearch}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        style={[styles.searchContainer, pressed ? styles.pressed : null]}>
        <Text style={styles.searchInput}>BOOK A RIDE NOW</Text>
        <Ionicons
          name="arrow-forward"
          size={20}
          color="#fff"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <Pressable
        style={styles.row}
        onPress={() => navigation.navigate('DestinationSearch')}>
        <View style={[styles.iconContainer, {backgroundColor: 'white'}]}>
          <AntDesign name={'clockcircle'} size={20} color={'black'} />
        </View>
        <Text style={styles.destinationText}>Home, Office</Text>
      </Pressable>
      <Pressable
        style={[styles.row, {marginBottom: 40}]}
        onPress={() => navigation.navigate('DestinationSearch')}>
        <View style={styles.iconContainer}>
          <Entypo name={'location-pin'} size={20} color={'white'} />
        </View>
        <Text style={styles.destinationText}>Choose a location</Text>
      </Pressable>

      {/* Suggestion */}
      <Text style={[styles.sectionTitle, {marginLeft: 8}]}>Suggestions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}>
        <TouchableOpacity
          style={[
            styles.saveOption,
            {
              width: 78,
              height: 85,
              marginRight: 8,
              backgroundColor: '#0a0a0a',
              borderWidth: 0.7,
              borderColor: 'silver',
            },
          ]}>
          <Image
            style={[styles.saveIcon, {width: 30, height: 30}]}
            source={{uri: 'https://img.icons8.com/ios-filled/50/car.png'}}
            tintColor={'grey'}
          />
          <Text style={[styles.saveText, {fontSize: 14}]}>Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveOption,
            {
              width: 78,
              height: 85,
              marginRight: 8,
              backgroundColor: '#0a0a0a',
              borderWidth: 0.7,
              borderColor: 'silver',
            },
          ]}>
          <Image
            style={[styles.saveIcon, {width: 30, height: 30}]}
            source={{uri: 'https://img.icons8.com/ios-filled/50/scooter.png'}}
            tintColor={'grey'}
          />
          <Text style={[styles.saveText, {fontSize: 14}]}>Rental Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveOption,
            {
              width: 78,
              height: 85,
              marginRight: 8,
              backgroundColor: '#0a0a0a',
              borderWidth: 0.7,
              borderColor: 'silver',
            },
          ]}>
          <Image
            style={[styles.saveIcon, {width: 30, height: 30}]}
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/shopping-cart.png',
            }}
            tintColor={'grey'}
          />
          <Text style={[styles.saveText, {fontSize: 14}]}>Package</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveOption,
            {
              width: 78,
              height: 85,
              marginRight: 8,
              backgroundColor: '#0a0a0a',
              borderWidth: 0.7,
              borderColor: 'silver',
            },
          ]}>
          <Image
            style={[styles.saveIcon, {width: 30, height: 30}]}
            source={{uri: 'https://img.icons8.com/ios-filled/50/pet.png'}}
            tintColor={'grey'}
          />
          <Text style={[styles.saveText, {fontSize: 14}]}>Reserve</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Plan your next trip */}
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Plan your next trip</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {planYourTripItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.saveOption,
                {justifyContent: 'start', alignItems: 'start'},
              ]}
              onPress={() => navigateToDetails(item.text)}>
              <Image style={styles.saveImage} source={item.image} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.saveText}>{item.text}</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#fff"
                  style={{marginLeft: 10}}
                />
              </View>
              <Text style={styles.saveSubText}>{item.subtext}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* More Ways */}
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>More Ways to use Black Cars</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {moreWaysItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.saveOption,
                {justifyContent: 'start', alignItems: 'start'},
              ]}
              onPress={() => navigateToDetails(item.text)}>
              <Image style={styles.saveImage} source={item.image} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.saveText}>{item.text}</Text>
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color="#fff"
                  style={{marginLeft: 10}}
                />
              </View>
              <Text style={styles.saveSubText}>{item.subtext}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default MainScreen;
