import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'black',
    height: '100%',
  },

  textInput: {
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    marginLeft: 20,
    color: 'black',
    borderRadius: 5,
    fontFamily: 'Manrope-SemiBold',
  },

  seperator: {
    backgroundColor: 'white',
    height: 1,
  },

  listView: {
    position: 'absolute',
    top: 105,
  },

  autoContainer: {
    position: 'absolute',
    top: 5,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconContainer: {
    backgroundColor: '#4a4a4a',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },

  locationText: {
    color: 'white',
    fontFamily: 'Manrope-SemiBold',
  },

  circle: {
    width: 6,
    height: 6,
    backgroundColor: '#4a4a4a',
    position: 'absolute',
    top: 30,
    left: 11,
    borderRadius: 5,
  },

  line: {
    width: 1,
    height: 42,
    backgroundColor: 'white',
    position: 'absolute',
    top: 39,
    left: 13.5,
  },

  square: {
    width: 5,
    height: 5,
    backgroundColor: '#4a4a4a',
    position: 'absolute',
    top: 85,
    left: 12,
  },
});

export default styles;
