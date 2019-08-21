import React, {Component} from 'react';
import {View} from 'react-native';
import MapPage from './Map';

export default class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    return (
      <View>
        <MapPage />
      </View>
    );
  }
}
