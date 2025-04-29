import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  map: {
    width: '100%',
    height: Dimensions.get('window').height - 260,
    marginBottom: 2,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  driverRating: {
    fontSize: 14,
    color: '#888',
  },
  carDetails: {
    marginTop: 5,
  },
  carModel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  licensePlate: {
    fontSize: 12,
    color: '#888',
  },
  tripInfo: {
    padding: 10,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  eta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  destination: {
    fontSize: 14,
    color: '#888',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#0a0a0a',
    gap: 15,
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a', // Green color for call button
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a', // Green color for call button
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: 'white',
  },

  callBtnText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
  cancelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#910404', // Red color for cancel button
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  cancelBtnText: {
    color: '#ffffff',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default styles;
