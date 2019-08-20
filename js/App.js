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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <AboutContainer />
        </SafeAreaView>
      </Fragment>
    </ApolloProvider>
  );
};

export default App;
