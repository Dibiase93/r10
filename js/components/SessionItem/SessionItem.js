import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import FavesContext from '../../context/FavesContext';

const SessionItem = ({item, navigation}) => {
  const heartIcon = <Icon name="ios-heart" size={25} color={'red'} />;

  return (
    <FavesContext.Consumer>
      {({faveIds}) => (
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Session', {
              item,
            });
          }}>
          <View>
            <Text style={styles.content}>{item.title}</Text>
            <Text style={styles.content}>{item.location}</Text>
            {faveIds.includes(item.id) ? heartIcon : null}
          </View>
        </TouchableHighlight>
      )}
    </FavesContext.Consumer>
  );
};

export default withNavigation(SessionItem);
