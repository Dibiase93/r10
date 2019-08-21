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
import RootStackNavigator from './navigation/RootStackNavigator';
import {FavesProvider} from './context/FavesContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavesProvider>
        <RootStackNavigator />
      </FavesProvider>
    </ApolloProvider>
  );
};

export default App;
