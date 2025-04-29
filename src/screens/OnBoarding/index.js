import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  const swiperRef = useRef(null);

  const handleNavigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsButtons={false}
      activeDotColor="white"
      dotColor="#2a2a2a">
      {/* First Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Black Car</Text>
          <Text style={styles.subtitle}>Your ride, just a tap away.</Text>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Tap to Explore</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Second Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Fast and Reliable</Text>
          <Text style={styles.subtitle}>
            Get to your destination with ease.
          </Text>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Enjoy Luxurios Rides</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Second Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Safety First</Text>
          <Text style={styles.subtitle}>
            Prioritize your safety with Black Car.
          </Text>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Click to next</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Second Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Additional FeaturesFast and Reliable</Text>
          <Text style={styles.subtitle}>
            Discover more benefits of Black Car.
          </Text>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Click to next</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Second Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Join the Community</Text>
          <Text style={styles.subtitle}>
            Be part of a growing network of satisfied riders.
          </Text>
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Click to next</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* Third Screen */}
      <ImageBackground
        source={require('../../assets/images/Monologue.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Get Started Now!</Text>
          <Text style={styles.subtitle}>Join millions of happy riders.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToLogin}>
            <Text style={styles.buttonText}>Let's Go</Text>
            <Icon
              name="arrow-right"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

export default OnBoarding;
