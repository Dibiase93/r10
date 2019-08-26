import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ConductItem from '../../components/ConductItem';
import styles from './styles';

const About = ({allConducts}) => {
  return (
    <View style={styles.aboutPageContainer}>
      <Text style={styles.aboutTitle}>Code Of Conduct</Text>
      {allConducts.map(conduct => (
        <View style={styles.content}>
          <ConductItem conduct={conduct} />
        </View>
      ))}
      <View style={styles.copyRightContainer}>
        <Text style={styles.copyRight}>{'\u00A9'} RED Academy 2017</Text>
      </View>
    </View>
  );
};

export default About;
