import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import { useUser } from '../../contexts/UserContext';

const reasonsList = [
  'Too Expensive',
  'Car Arrived Late',
  'Driver Not Professional',
  'Changed My Mind',
  "Driver's Car is Uncomfortable",
  "Driver's is Not Following Route",
  'Inappropriate Driver Behavior',
  'App Issues',
  'Ride Duration is Too Long',
  'Vehicle is Dirty',
  'Miscommunication with Driver',
  'Other',
];

const handleCallDriver = () => {
  const phoneNumber = 'tel:+1234567890'; // Replace with the driver's phone number
  Linking.openURL(phoneNumber).catch(err =>
    console.error("Couldn't load the dialer", err),
  );
};

const ConfirmationModal = ({visible, onClose, onConfirm}) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const { user, requestId } = useUser();

  const handleSelectReason = reason => {
    setSelectedReason(reason);
    if (reason === 'Other') {
      setOtherReason('');
    }
  };

  const handleConfirm = async () => {
    const reason = selectedReason === 'Other' ? otherReason : selectedReason;
    onConfirm(reason);
  
    try {
      const response = await fetch(`https://black-car.us/rides/ride-requests/${requestId}/cancel_ride/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reason }),
      });
  
      if (response.ok) {
        console.log('Ride declined successfully');
        onClose();
      } else {
        console.error('Failed to decline the ride:', response.status);
      }
    } catch (error) {
      console.error('Error declining the ride:', error);
    }
  };

  const renderReasonItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.reasonItem,
        item === selectedReason
          ? styles.selectedReasonItem
          : styles.defaultReasonItem,
      ]}
      onPress={() => handleSelectReason(item)}>
      <Text
        style={[
          styles.reasonText,
          item === selectedReason && styles.selectedReasonText,
        ]}>
        {`${index + 1}. ${item}`}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Cancel Ride</Text>
          <Text style={styles.message}>
            Are you sure you want to cancel the ride?
          </Text>

          <FlatList
            data={reasonsList}
            keyExtractor={item => item}
            renderItem={renderReasonItem}
            style={styles.reasonList}
            showsVerticalScrollIndicator={false} 
          />

          {selectedReason === 'Other' && (
            <TextInput
              style={styles.input}
              placeholder="Please specify"
              value={otherReason}
              onChangeText={setOtherReason}
            />
          )}

          <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[
                styles.confirmButton,
                !selectedReason && styles.confirmButtonDisabled,
              ]}
              onPress={handleConfirm}
              disabled={!selectedReason}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
