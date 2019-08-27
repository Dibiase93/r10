import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';
import PropTypes from 'prop-types';

const SessionItem = ({item, navigation}) => {
  const heartIcon = <Icon name="ios-heart" size={18} color={'#cf392a'} />;
  return (
    <View style={styles.sectionContainer}>
      <FavesContext.Consumer>
        {({faveIds}) => (
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={'#e6e6e6'}
            onPress={() => {
              navigation.navigate('Session', {
                item,
              });
            }}>
            <View style={styles.sessionContainer}>
              <Text style={styles.content}>{item.title}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{item.location}</Text>
                {faveIds.includes(item.id) ? heartIcon : null}
              </View>
            </View>
          </TouchableHighlight>
        )}
      </FavesContext.Consumer>
    </View>
  );
};

SessionItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.object,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
export default withNavigation(SessionItem);
