import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontFamily: 'Montserrat',
      },
      android: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },

  // sessionContainer: {},
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
