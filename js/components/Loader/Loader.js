import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#cf392a" />
    </View>
  );
};

export default Loader;
