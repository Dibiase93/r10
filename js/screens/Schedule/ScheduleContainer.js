import React, {Component} from 'react';
import Schedule from './Schedule';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Text} from 'react-native';
import FavesContext from '../../context/FavesContext';
import Loader from '../../components/Loader';

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

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error...</Text>;
          return (
            <FavesContext.Consumer>
              {({faveIds}) => (
                <Schedule allSessions={data.allSessions} faveIds={faveIds} />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
