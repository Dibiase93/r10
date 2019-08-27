import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
  sectionContainer: {
    paddingTop: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 5,
  },
  location: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-regular',
        color: '#999999',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
  button: {
    backgroundColor: '#e6e6e6',
  },
  sessionContainer: {
    padding: 10,
    paddingLeft: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },

  sessionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'purple',
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
});

export default styles;
