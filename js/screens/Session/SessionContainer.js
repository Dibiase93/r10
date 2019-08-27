import React, {Component} from 'react';
import {View} from 'react-native';
import Session from './Session';
import {withNavigation} from 'react-navigation';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {ActivityIndicator, Text} from 'react-native';
import FavesContext from '../../context/FavesContext';

const SPEAKER = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      bio
      image
      name
      url
    }
  }
`;

class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };
  render() {
    const item = this.props.navigation.getParam('item');

    return item.speaker ? (
      <Query query={SPEAKER} variables={{id: item.speaker.id}}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error...</Text>;

          return (
            <FavesContext.Consumer>
              {({faveIds, addFaveSession, removeFaveSession}) => (
                <Session
                  item={item}
                  faveIds={faveIds}
                  addFaveSession={addFaveSession}
                  removeFaveSession={removeFaveSession}
                  speaker={data.Speaker}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    ) : (
      <FavesContext.Consumer>
        {({faveIds, addFaveSession, removeFaveSession}) => (
          <Session
            item={item}
            faveIds={faveIds}
            addFaveSession={addFaveSession}
            removeFaveSession={removeFaveSession}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(SessionContainer);
