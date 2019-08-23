import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ConductItem from '../../components/ConductItem';

const About = ({allConducts}) => {
  return allConducts.map(conduct => <ConductItem conduct={conduct} />);
};

export default About;
