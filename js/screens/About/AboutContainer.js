import gql from 'graphql-tag';
import React, {Component} from 'react';
import {Query} from 'react-apollo';
import About from './About';
import {ActivityIndicator, Text} from 'react-native';

const ALL_CONDUCTS = gql`
  {
    allConducts {
      id
      description
      title
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <Query query={ALL_CONDUCTS}>
        {({loading, error, data}) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error...</Text>;
          return <About allConducts={data.allConducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
