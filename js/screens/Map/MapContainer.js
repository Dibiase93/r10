import React, {Component} from 'react';
import {View} from 'react-native';
import MapPage from './Map';

export default class MapContainer extends Component {
  render() {
    return (
      <View>
        <MapPage />
      </View>
    );
  }
}
