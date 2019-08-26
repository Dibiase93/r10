import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  descriptionHidden: {
    display: 'none',
  },
  description: {
    display: 'flex',
    fontFamily: 'Montserrat-light',
    fontSize: 18,
    marginTop: 10,
    lineHeight: 24,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  conductTitle: {
    color: '#9963ea',
    marginLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  conductItemContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default styles;
