import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 0.7,
    borderBottomColor: '#5d5d5d',
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontSize: 15,
    marginBottom: 5,
    color: 'white',
    marginTop: 10,
    fontFamily: 'Manrope-SemiBold',
  },
  time: {
    color: '#7a7a7a',
    fontFamily: 'Manrope-SemiBold',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    left: 125,
    bottom: 30,
  },
  price: {
    fontSize: 16,
    marginLeft: 5,
    color: 'white',
    fontFamily: 'Manrope-SemiBold',
  },
});

export default styles;
