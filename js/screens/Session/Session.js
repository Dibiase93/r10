import React from 'react';
import {Text, View, Image, TouchableHighlight, ScrollView} from 'react-native';
import styles from './styles';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import moment from 'moment';

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
        <Button onPress={() => addFaveSession(item.id)} title="Add To Faves" />
      ) : (
        <Button
          onPress={() => removeFaveSession(item.id)}
          title="Remove from Faves"
        />
      )}
    </ScrollView>
  );
};

export default withNavigation(Session);
