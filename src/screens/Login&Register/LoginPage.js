import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

const LoginPage = () => {
  const navigation = useNavigation();
  const { saveUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const userData = { email, password };
    setLoading(true);
    try {
      const response = await axios.post(
        'https://black-car.us/users/login/',
        userData,
        {
          headers: {
            'ngrok-skip-browser-warning': 'true',
            'Content-Type': 'application/json',
          },
        }
      );
      setLoading(false);
      if (response.status === 200 && response.data.message === 'Login successful') {
        const { id, email, username } = response.data.user;
        saveUser({ id, email, username });
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: `Welcome, ${username}!`,
          visibilityTime: 3000,
        });
        navigation.navigate('MainDrawer');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: response.data.message || 'Invalid email or password',
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Network Error',
        text2: 'Please check your internet connection or try again later.',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'always'}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../../assets/images/LogoImage.png')} />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="white" style={styles.smallIcon} />
            <TextInput
              placeholder="Mobile or Email"
              style={styles.textInput}
              placeholderTextColor="#7a7a7a"
              onChange={e => setEmail(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="lock" color="white" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              placeholderTextColor="#7a7a7a"
              secureTextEntry={!showPassword}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome
                name={showPassword ? 'eye' : 'eye-slash'}
                color="white"
                style={styles.smallIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 8, marginRight: 10 }}>
            <Text style={{ color: 'white', fontWeight: '700' }}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
            <View>
              <Text style={styles.textSign}>Log In</Text>
            </View>
          </TouchableOpacity>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#919191' }}>----- Or Continue As -----</Text>
          </View>
          <View style={styles.bottomButton}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => navigation.navigate('RegisterPage')}
              >
                <FontAwesome name="user-plus" color="black" style={[styles.smallIcon2, { fontSize: 30 }]} />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Sign Up</Text>
            </View>
            {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Pressable style={styles.inBut2}>
                <FontAwesome name="google" color="black" style={[styles.smallIcon2, { fontSize: 30 }]} />
              </Pressable>
              <Text style={styles.bottomText}>Google</Text>
            </View> */}
            {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Pressable style={styles.inBut2}>
                <FontAwesome name="apple" color="black" style={styles.smallIcon2} />
              </Pressable>
              <Text style={styles.bottomText}>Apple</Text>
            </View> */}
          </View>
        </View>
        {loading && (
          <View style={styles.loaderOverlay}>
            <ActivityIndicator size={80} color="#8a8a8a" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default LoginPage;
