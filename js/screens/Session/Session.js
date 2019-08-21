import React from 'react';
import {Text} from 'react-native';

const Session = ({item, speaker, faveIds}) => {
  console.log(speaker);
  return (
    <Text>{item.title}</Text>
    // <Text>{speaker.name}</Text>
  );
};

export default Session;
