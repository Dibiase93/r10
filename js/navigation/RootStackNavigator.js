import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import SpeakerModal from '../screens/Speaker';

export default createAppContainer(
  createStackNavigator(
    {Layout: NavigationLayout, Speaker: SpeakerModal},
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
