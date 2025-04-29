import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'black',
    marginHorizontal: 8,
    marginVertical: 5,
    padding: 7,
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
    width: 90,
    padding: 8,
    backgroundColor: '#43b0f1',
    borderRadius: 50,
  },

  row: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
  },

  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },

  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 17,
    color: 'white',
    fontFamily: 'Manrope-SemiBold',
  },
});

export default styles;
