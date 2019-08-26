import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  content: {
    marginLeft: 5,
  },
  aboutTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 26,
    marginLeft: 5,
  },
  aboutPageContainer: {
    marginLeft: 10,
  },
  copyRight: {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 18,
    fontFamily: 'Montserrat-light',
  },
  aboutContent: {
    fontSize: 18,
    fontFamily: 'Montserrat-light',
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  borderTopContainer: {
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 15,
  },
  borderTopEntryContainer: {
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    marginRight: 10,
    marginTop: 15,
  },
  image: {
    marginTop: 30,
    marginBottom: 15,
    width: '65%',
    height: 60,
    resizeMode: 'stretch',
  },
  imageContainer: {
    alignItems: 'center',
  },
});

export default styles;
