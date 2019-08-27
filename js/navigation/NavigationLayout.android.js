import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import AboutScreen from '../screens/About';
import FavesScreen from '../screens/Faves';
import MapScreen from '../screens/Map';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sharedNavigationOptions} from './config';
import {View, TouchableOpacity, Text} from 'react-native';

const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: FavesScreen,
    },
    Session: {
      screen: SessionScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const MapStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
    },
    Session: {
      screen: SessionScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack,
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      drawerIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `md-calendar`;
        } else if (routeName === 'Map') {
          iconName = `md-map`;
        } else if (routeName === 'Faves') {
          iconName = `md-heart`;
        } else if (routeName === 'About') {
          iconName = `md-information-circle`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
