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
  render() {
    const item = this.props.navigation.getParam('item', {});
    return (
      <Query query={SPEAKER} variables={{id: item.speaker.id}}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error...</Text>;

          return (
            <FavesContext.Consumer>
              {({faveIds}) => (
                <Session item={item} faveIds={faveIds} speaker={data.Speaker} />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default withNavigation(SessionContainer);
