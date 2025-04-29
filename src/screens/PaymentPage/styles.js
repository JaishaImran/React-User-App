// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#f0f4f8',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//     marginBottom: 20,
//     fontSize: 16,
//     color: '#333',
//   },
//   cardContainer: {
//     height: 50,
//     marginVertical: 20,
//     width: '100%',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 10,
//   },
//   cardField: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   payButton: {
//     backgroundColor: '#1e90ff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//     shadowColor: '#1e90ff',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//   },
//   payButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   paymentResult: {
//     marginTop: 20,
//     fontSize: 16,
//     color: '#ff6347',
//     textAlign: 'center',
//   },
// });

// export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the view take up the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 15,
    backgroundColor: 'black', // Light gray background for a clean look
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: -50,
  },
  headerText: {
    fontSize: 30, // Larger font for the header
    fontWeight: 'bold', // Makes the text bold
    marginBottom: 20, // Space below the header
    color: 'white', // Darker text color
    textAlign: 'center', // Centers the text
  },
  label: {
    fontSize: 18, // Medium font for labels
    marginBottom: 10, // Space below the label
    color: '#8a8a8a', // Slightly lighter gray for the label
  },
  input: {
    width: '70%', // Make input take up 80% of the screen width
    height: 45, // Set a standard height for the input
    borderColor: '#ccc', // Light gray border
    borderWidth: 1, // Thin border width
    borderRadius: 8, // Rounded corners for the input
    paddingHorizontal: 15, // Padding inside the input box
    marginBottom: 20, // Space below the input
    backgroundColor: '#fff', // White background for the input
    color: 'black',
  },
  paymentResult: {
    marginTop: 20, // Space above the payment result
    fontSize: 16, // Standard font size
    color: '#ff6347', // Tomato color for any result message
    textAlign: 'center', // Center the result text
  },
});

export default styles;
