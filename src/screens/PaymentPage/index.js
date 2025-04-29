// import React, { useState } from 'react';
// import { View, TextInput, Text, Pressable, Image } from 'react-native';
// import { CardField, useStripe } from '@stripe/stripe-react-native';
// import axios from 'axios';
// import styles from './styles';

// const PaymentScreen = () => {
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('usd');
//   const [paymentResult, setPaymentResult] = useState(null);
//   const [cardDetails, setCardDetails] = useState(null);

//   const { confirmPayment } = useStripe();

//   const handlePayment = async () => {
//     try {
//       if (!cardDetails?.complete) {
//         setPaymentResult('Please enter complete card details.');
//         return;
//       }

//       // Call your backend to create a payment intent
//       const response = await axios.post(
//         'http://your-backend-url.com/create-payment-intent',
//         {
//           amount: parseFloat(amount) * 100, // Stripe expects amount in cents
//           currency: currency,
//         },
//       );

//       const { clientSecret } = response.data;

//       // Confirm the payment using Stripe's confirmPayment method
//       const { error, paymentIntent } = await confirmPayment(clientSecret, {
//         paymentMethodType: 'Card',
//         paymentMethodData: {
//           billingDetails: {
//             name: 'Test User', // Optional, collect from user in production
//           },
//         },
//       });

//       if (error) {
//         setPaymentResult(`Payment failed: ${error.message}`);
//       } else if (paymentIntent) {
//         setPaymentResult(`Payment successful! Status: ${paymentIntent.status}`);
//       }
//     } catch (error) {
//       console.error('Payment Error:', error);
//       setPaymentResult('Error occurred during payment');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={require('../../assets/images/LogoImage.png')}
//       />
//       <Text style={styles.headerText}>
//         CONTINUE TO PROCEED WITH STRIPE PAYMENT
//       </Text>

//       <Text style={styles.label}>Enter Amount (USD):</Text>
//       <TextInput
//         placeholder="Enter amount"
//         value={amount}
//         onChangeText={setAmount}
//         keyboardType="numeric"
//         style={styles.input}
//         placeholderTextColor={'grey'}
//       />

//       <Text style={styles.label}>Card Information:</Text>
//       <CardField
//         postalCodeEnabled={false}
//         placeholder={{
//           number: '4242 4242 4242 4242',
//         }}
//         cardStyle={{backgroundColor: 'green' }}
//         style={styles.cardContainer}
//         onCardChange={(cardDetails) => setCardDetails(cardDetails)}
//       />

//       <Pressable
//         style={styles.payButton}
//         onPress={handlePayment}>
//         <Text style={styles.payButtonText}>PAY NOW</Text>
//       </Pressable>

//       {paymentResult && (
//         <Text style={styles.paymentResult}>{paymentResult}</Text>
//       )}
//     </View>
//   );
// };

// export default PaymentScreen;

import React, {useState} from 'react';
import {View, TextInput, Text, Pressable, Image} from 'react-native';
import {useStripe} from '@stripe/stripe-react-native';
import axios from 'axios';
import styles from './styles';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [paymentResult, setPaymentResult] = useState(null);

  const {confirmPayment} = useStripe();

  const handlePayment = async () => {
    try {
      // Call your backend to create a payment intent
      const response = await axios.post(
        'https://black-car.us/rides/create-payment-intent/',
        {
          amount: parseFloat(amount),
          currency: currency,
        },
      );

      const {clientSecret} = response.data;

      // Confirm the payment using Stripe's confirmPayment method
      const {error, paymentIntent} = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });

      if (error) {
        setPaymentResult(`Payment failed: ${error.message}`);
      } else if (paymentIntent) {
        setPaymentResult(`Payment successful! Status: ${paymentIntent.status}`);
      }
    } catch (error) {
      console.error('Payment Error:', error);
      setPaymentResult('Error occurred during payment');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/LogoImage.png')}
      />
      <Text style={styles.headerText}>
        CONTINUE TO PROCEED WITH STRIPE PAYMENT
      </Text>
      <Text style={styles.label}>Enter Amount (USD):</Text>
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor={'grey'}
      />
      <Pressable
        style={{
          backgroundColor: '#2a2a2a',
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 10,
          borderWidth: 0.8,
          borderColor: 'white',
        }}
        onPress={handlePayment}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          PAY NOW
        </Text>
      </Pressable>
      {paymentResult && (
        <Text style={styles.paymentResult}>{paymentResult}</Text>
      )}
    </View>
  );
};

export default PaymentScreen;
