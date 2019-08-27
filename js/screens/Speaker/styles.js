import {StyleSheet} from 'react-native';
import {ArgumentOutOfRangeError} from 'rxjs';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
    borderRadius: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 20,
  },
  speakerIcon: {
    position: 'absolute',
    left: 0,
    marginLeft: 18,
    top: 18,
  },

  speakerPageBg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  speakerContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  speakerHeader: {
    color: 'white',
    fontSize: 20,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-Regular',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
  headerContainer: {
    marginTop: 30,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '10%',
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
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
  },
  speakerName: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    fontSize: 30,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-Regular',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },

  speakerBio: {
    lineHeight: 27,
    padding: 15,
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat-light',
      },
      android: {
        fontFamily: 'Montserrat-light',
      },
    }),
  },
});

export default styles;
