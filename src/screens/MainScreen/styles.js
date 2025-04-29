import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    marginTop: 30,
    borderWidth: 0.8,
    borderColor: 'white',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  timeButton: {
    backgroundColor: '#43b0f1',
    padding: 10,
    borderRadius: 6,
  },
  timeButtonText: {
    color: '#fff',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  saveOption: {
    borderRadius: 12,
    marginRight: 16,
    width: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  saveIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 20,
  },

  iconContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 25,
  },

  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 17,
    color: 'white',
  },
  saveImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  gradientBackground: {
    borderRadius: 12,
    padding: 16,
  },
  saveText: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 4,
  },
  saveSubText: {
    color: '#6a6a6a',
    fontSize: 15,
    marginBottom: 10,
  },
  pressed: {
    backgroundColor: 'black',
  },
});

export default styles;
