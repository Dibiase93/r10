import React, {Component} from 'react';
import {View} from 'react-native';
import Faves from './Faves';

export default class FavesContainer extends Component {
  render() {
    return (
      <View>
        <Faves />
      </View>
    );
  }
}
