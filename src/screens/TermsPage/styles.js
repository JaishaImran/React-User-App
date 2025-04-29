import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  iconStyle: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    textDecorationLine: 'underline',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#7a7a7a',
    marginBottom: 20,
  },
});

export default styles;
