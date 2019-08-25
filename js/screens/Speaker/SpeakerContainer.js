import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Speaker from './Speaker';

export class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'About the Speaker',
  };

  render() {
    const speaker = this.props.navigation.getParam('speaker', {});
    console.log(speaker);
    return (
      <View>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
