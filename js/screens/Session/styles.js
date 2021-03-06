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

  description: {
    fontSize: 22,
    padding: 15,
    marginTop: 10,
    lineHeight: 33,
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
    marginTop: 30,
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
  button: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 50,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: 'white',
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
  linearBg: {
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    width: '65%',
  },
});

export default styles;
