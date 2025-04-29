import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, sePasswordlVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [age, setAge] = useState('');
  const [ageVerify, setAgeVerify] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    const userData = {
      username: name, 
      email: email,
      mobile: mobile,
      password: password,
      age: age,
    };
  
    if (nameVerify && emailVerify && mobileVerify && passwordVerify && ageVerify) {
      try {
        const response = await axios.post(
          'https://black-car.us/users/users/',
          userData,
        );
  
        if (response.status === 201 || response.data.status === 'ok') {
          Toast.show({
            type: 'success',
            text1: 'Great!',
            text2: 'Registered Successfully!',
            visibilityTime: 3000,
          });
          navigation.navigate('LoginPage');
        } else {
          Alert.alert('Error', JSON.stringify(response.data));
        }
      } catch (error) {
        console.error('Error during registration:', error);
        Toast.show({
          type: 'error',
          text1: 'Error!',
          text2: 'Registration failed. Try again later!',
          visibilityTime: 3000,
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: 'Fill Mandatory Details!',
        visibilityTime: 3000,
      });
    }
  };

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);

    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);

    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);

    if (/[0-9]{1}[0-9]{9}/.test(mobileVar)) {
      setMobile(mobileVar);
      setMobileVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    sePasswordlVerify(false);

    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      sePasswordlVerify(true);
    }
  }

  function handleAge(e) {
    const ageVar = e.nativeEvent.text;
    setAge(ageVar);
    setAgeVerify(false);

    if (Number(ageVar) >= 18) {
      setAgeVerify(true);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/LogoImage.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Register</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="white" style={styles.smallIcon} />
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              placeholderTextColor="#9a9a9a"
              onChange={e => handleName(e)}
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <MaterialIcons name="error" color="red" size={20} />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Name should be more than 1 character
            </Text>
          )}
          <View style={styles.action}>
            <Fontisto name="email" color="white" style={styles.smallIcon} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              placeholderTextColor="#9a9a9a"
              onChange={e => {
                handleEmail(e);
              }}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <MaterialIcons name="error" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Enter Proper Email Address
            </Text>
          )}
          <View style={styles.action}>
            <Fontisto
              name="mobile-alt"
              color="white"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              placeholderTextColor="#9a9a9a"
              onChange={e => {
                handleMobile(e);
              }}
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <MaterialIcons name="error" color="red" size={20} />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Phone number required
            </Text>
          )}

          {/* Age Input */}
          <View style={styles.action}>
            <FontAwesome
              name="birthday-cake"
              color="white"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Age"
              style={styles.textInput}
              placeholderTextColor="#9a9a9a"
              keyboardType="numeric"
              onChange={e => handleAge(e)}
            />
            {age.length < 1 ? null : ageVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <MaterialIcons name="error" color="red" size={20} />
            )}
          </View>
          {age.length < 1 ? null : ageVerify ? null : (
            <Text style={{marginLeft: 20, color: 'red'}}>
              You must be 18 years or older
            </Text>
          )}

          {/* Password Input */}
          <View style={styles.action}>
            <FontAwesome name="lock" color="white" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              placeholderTextColor="#9a9a9a"
              onChange={e => {
                handlePassword(e);
              }}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              ) : (
                <Feather
                  name="eye"
                  style={{marginRight: -10}}
                  color={passwordVerify ? 'green' : 'red'}
                  size={23}
                />
              )}
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text style={{marginLeft: 20, color: 'red'}}>
              UpperCase, LowerCase, Number & 6 more charachters.
            </Text>
          )}
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
            <View>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterPage;
