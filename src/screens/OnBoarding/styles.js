import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#9a9a9a',
    textAlign: 'center',
    marginBottom: 150,
  },
  button: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10, // Space between text and icon
  },
  icon: {
    marginLeft: 10, // Space between icon and text
  },
});

export default styles;
