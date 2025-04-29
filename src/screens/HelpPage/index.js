// HelpPage.js
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import styles from './styles';
import faqs from '../../assets/data/faqs'; // Import the FAQs from the new file

const HelpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0, // Adjust this value as needed
            left: 0, // Adjust this value as needed
            zIndex: 1, // Ensure the button is on top
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Help or FAQ's</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <Text style={styles.question}>
              {index + 1}. {faq.question}
            </Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HelpPage;
