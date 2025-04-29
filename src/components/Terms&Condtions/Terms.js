import React from 'react';
import {Modal, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import modalTerms from '../../assets/data/modalTerms';

const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${month}/${day}/${year}`;
};

const TermsAndConditions = ({visible, onClose}) => {
  const currentDate = getCurrentDate();
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <Text style={styles.mainTitle}>Terms and Conditions</Text>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.sectionTitle}>
              Effective Date: {currentDate}
            </Text>
            {modalTerms.map((term, index) => (
              <View key={index}>
                <Text style={styles.subsectionTitle}>{term.title}</Text>
                {Array.isArray(term.content) ? (
                  term.content.map((item, subIndex) => (
                    <View key={subIndex}>
                      {item.heading && (
                        <Text style={styles.subsectionHeading}>
                          {item.heading}
                        </Text>
                      )}
                      <Text style={styles.text}>{item.text}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.text}>{term.content}</Text>
                )}
              </View>
            ))}
          </ScrollView>

          {/* Custom Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Accept & Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TermsAndConditions;
