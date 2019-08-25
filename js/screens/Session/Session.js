import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

const Session = ({
  item,
  speaker,
  faveIds,
  addFaveSession,
  removeFaveSession,
  navigation,
}) => {
  const heartIcon = <Icon name="ios-heart" size={25} color={'red'} />;
  console.log(speaker);
  console.log(faveIds);
  return (
    <View>
      <Text>{item.location}</Text>
      {faveIds.includes(item.id) ? heartIcon : null}
      <Text>{item.title}</Text>
      <Text>{item.startTime}</Text>
      <Text>{speaker.bio}</Text>
      <Text>Presented By:</Text>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Speaker', {
            speaker,
          });
        }}>
        <View>
          <Image style={styles.image} source={{uri: speaker.image}} />
          <Text>{speaker.name}</Text>
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
    </View>
  );
};

export default withNavigation(Session);
