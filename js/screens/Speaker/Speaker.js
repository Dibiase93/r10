import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Speaker = ({speaker}) => {
  return (
    <View style={{marginTop: 50}}>
      <Text>Speaker Section</Text>
      <View>
        <Image style={styles.image} source={{uri: speaker.image}} />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
