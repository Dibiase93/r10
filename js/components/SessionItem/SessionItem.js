import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';

const SessionItem = ({item, navigation}) => {
  const heartIcon = <Icon name="ios-heart" size={18} color={'red'} />;

  return (
    <View style={styles.sectionContainer}>
      <FavesContext.Consumer>
        {({faveIds}) => (
          <TouchableHighlight
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

export default withNavigation(SessionItem);
