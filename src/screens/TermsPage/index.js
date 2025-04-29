import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import terms from '../../assets/data/terms.js';

const TermsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon
            name="menu"
            size={30}
            color={'white'}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>TERMS AND CONDITIONS</Text>
        {terms.map((section, index) => (
          <View key={index}>
            <Text style={styles.heading}>{section.title}</Text>
            {section.content.map((item, subIndex) => (
              <Text key={subIndex} style={styles.text}>
                {item}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TermsPage;
