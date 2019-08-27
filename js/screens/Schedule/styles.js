import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  sessionHeader: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: '#e6e6e6',
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
