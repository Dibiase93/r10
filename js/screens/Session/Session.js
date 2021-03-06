import React from 'react';
import {Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

const Session = ({
  item,
  speaker,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation,
}) => {
  const heartIcon = <Icon name="ios-heart" size={18} color={'#cf392a'} />;

  return (
    <ScrollView>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{item.location}</Text>
        {faveIds.includes(item.id) ? heartIcon : null}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>
        {moment(`${item.startTime}`).format('h:mm A')}
      </Text>

      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.presented}>Presented By:</Text>
      {speaker ? (
        <TouchableHighlight
          activeOpacity={0.5}
          underlayColor={'#e6e6e6'}
          onPress={() => {
            navigation.navigate('Speaker', {
              speaker,
            });
          }}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: speaker.image}} />
            <Text style={styles.speaker}>{speaker.name}</Text>
          </View>
        </TouchableHighlight>
      ) : null}

      {!faveIds.includes(item.id) ? (
        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{x: 0, y: 0.2}}
          end={{x: 1, y: 0.2}}
          style={styles.linearBg}>
          <TouchableHighlight
            onPress={() => addFaveSession(item.id)}
            style={styles.button}>
            <Text style={styles.buttonText}>Add to Faves</Text>
          </TouchableHighlight>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{x: 0, y: 0.2}}
          end={{x: 1, y: 0.2}}
          style={styles.linearBg}>
          <TouchableHighlight
            onPress={() => removeFaveSession(item.id)}
            style={styles.button}>
            <Text style={styles.buttonText}>Remove from Faves</Text>
          </TouchableHighlight>
        </LinearGradient>
      )}
    </ScrollView>
  );
};

Session.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.object.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  speaker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  faveIds: PropTypes.array.isRequired,
  addFaveSession: PropTypes.func.isRequired,
  removeFaveSession: PropTypes.func.isRequired,
};

export default withNavigation(Session);
