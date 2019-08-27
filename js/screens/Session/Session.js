import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

const Session = ({
  item,
  speaker,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation,
}) => {
  const heartIcon = <Icon name="ios-heart" size={18} color={'#cf392a'} />;
  console.log(speaker);
  console.log(faveIds);
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
      <Text style={styles.bio}>{speaker.bio}</Text>
      <Text style={styles.presented}>Presented By:</Text>

      <TouchableHighlight
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

      {!faveIds.includes(item.id) ? (
        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.5}}
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
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0.5}}
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

export default withNavigation(Session);
