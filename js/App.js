/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {ApolloProvider} from '@apollo/react-hooks';
import client from '../js/config/api';

import React, {Fragment} from 'react';
import AboutContainer from './screens/About';
import RootStackNavigator from './navigation/RootStackNavigator';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <RootStackNavigator />
      </Fragment>
    </ApolloProvider>
  );
};

export default App;
