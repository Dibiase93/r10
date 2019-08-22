import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GradientHeader = props => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation}) => (
  <Icon
    name="md-menu"
    size={25}
    color={'white'}
    onPress={navigation.openDrawer}
    style={{marginLeft: 10}}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  ...Platform.select({
    android: {headerLeft: <MenuButton navigation={navigation} />},
  }),
});
