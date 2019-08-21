import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Faves from './Faves';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const ALL_SESSIONS = gql`
  {
    allSessions {
      id
      title
      startTime
      location
      description
      speaker {
        id
      }
    }
  }
`;

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };
  render() {
    return (
      <View>
        <Faves />
      </View>
    );
  }
}
