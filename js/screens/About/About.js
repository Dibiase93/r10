import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ConductItem from '../../components/ConductItem';
import styles from './styles';

const About = ({allConducts}) => {
  return allConducts.map(conduct => (
    <View style={styles.content}>
      <ConductItem conduct={conduct} />
    </View>
  ));
};

export default About;
