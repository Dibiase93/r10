import React, {Component} from 'react';
import {View} from 'react-native';
import Schedule from './Schedule';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {ActivityIndicator, Text} from 'react-native';

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

export default class SchduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error...</Text>;
          return <Schedule allSessions={data.allSessions} />;
        }}
      </Query>
    );
  }
}
