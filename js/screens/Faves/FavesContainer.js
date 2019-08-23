import React, {Component} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import Faves from './Faves';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FavesContext from '../../context/FavesContext';

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
      <Query query={ALL_SESSIONS}>
        {({loading, error, data}) => {
          console.log(data.allSessions);
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error...</Text>;

          return (
            <FavesContext.Consumer>
              {({faveIds}) => (
                <Faves
                  allSessions={data.allSessions.filter(session =>
                    faveIds.includes(session.id),
                  )}
                  faveIds={faveIds}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
