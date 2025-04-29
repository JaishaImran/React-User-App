import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#2a2a2a',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 15,
    lineHeight: 14,
    color: '#8a8a8a',
    width: '100%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: 'black',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: 'grey',
    borderTopWidth: 1.5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default styles;
