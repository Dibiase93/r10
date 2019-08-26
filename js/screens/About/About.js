import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ConductItem from '../../components/ConductItem';
import styles from './styles';

const About = ({allConducts}) => {
  return (
    <ScrollView style={styles.aboutPageContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/Logo/r10_logo2x.png')}
        />
      </View>
      <View style={styles.borderTopEntryContainer}>
        <Text style={styles.aboutContent}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
      </View>
      <Text style={styles.aboutTitle}>Date & Venue</Text>
      <Text style={styles.aboutContent}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC
      </Text>
      <Text style={styles.aboutTitle}>Code Of Conduct</Text>
      {allConducts.map(conduct => (
        <View style={styles.content}>
          <ConductItem conduct={conduct} />
        </View>
      ))}
      <View style={styles.borderTopContainer}>
        <Text style={styles.copyRight}>{'\u00A9'} RED Academy 2017</Text>
      </View>
    </ScrollView>
  );
};

export default About;
