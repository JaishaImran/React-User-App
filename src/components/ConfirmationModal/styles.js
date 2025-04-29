import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '90%',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
  },
  reasonList: {
    width: '100%',
    maxHeight: 300, // Adjust height as needed
    marginBottom: 15,
    color: 'white'
  },
  reasonItem: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'white'
  },
  defaultReasonItem: {
    backgroundColor: 'transparent', // Default background color
  },
  selectedReasonItem: {
    backgroundColor: 'white', // Background color for selected item
  },
  reasonText: {
    fontSize: 16,
    color: 'white'
  },
  selectedReasonText: {
    color: 'black', // Text color for selected item
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#910404',
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
