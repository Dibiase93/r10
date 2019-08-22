import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Session = ({
  item,
  speaker,
  faveIds,
  addFaveSession,
  removeFaveSession,
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
      <View>
        <Image style={styles.image} source={{uri: speaker.image}} />
        <Text>{speaker.name}</Text>
      </View>
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

export default Session;
