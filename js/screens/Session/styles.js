import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  speaker: {
    paddingLeft: 20,
    fontSize: 18,

    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
  },
  location: {
    color: '#999999',
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },

  title: {
    fontSize: 30,
    paddingLeft: 20,
    paddingBottom: 20,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },

  time: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#cf392a',
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },

  bio: {
    fontSize: 18,
    padding: 20,
    lineHeight: 27,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-Light',
      },
      android: {
        fontFamily: 'Montserrat-Light',
      },
    }),
  },
  presented: {
    color: '#999999',
    fontSize: 18,
    paddingLeft: 20,
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
