import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    maxHeight: '70%', // Adjusted to give more vertical space
    backgroundColor: '#0a0a0a',
    borderRadius: 10,
    padding: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
  scrollView: {
    flexGrow: 0,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'silver',
    marginVertical: 10,
    textAlign: 'center',
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
  },
  subsectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'lightgrey',
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    color: '#8a8a8a',
    lineHeight: 22,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black', // Set your desired background color
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    borderColor: 'white',
    borderWidth: 0.7,
  },
  buttonText: {
    color: 'white', // Set text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
