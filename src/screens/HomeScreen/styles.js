import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'black',
    margin: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5c5c5c',
    fontFamily: 'Manrope-ExtraBold',
  },

  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Manrope-ExtraBold',
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#3a3a3a',
    borderRadius: 50,
  },
  ads1: {
    textAlign: 'center',
    fontSize: 16,
    color: '#dba204',
    fontFamily: 'Manrope-SemiBold',
    paddingBottom: 5,
  },
  ads2: {
    textAlign: 'start',
    fontSize: 12,
    color: 'white',
    fontFamily: 'Manrope-Regular',
  },
});

export default styles;
