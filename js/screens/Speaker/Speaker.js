import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {navigation, withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={styles.speakerPageBg}>
      <View style={styles.headerContainer}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name="ios-close"
          color="white"
          size={45}
          style={styles.speakerIcon}
        />
        <Text style={styles.speakerHeader}>About The Speaker</Text>
      </View>
      <ScrollView style={styles.speakerContainer}>
        <Image style={styles.image} source={{uri: speaker.image}} />
        <Text style={styles.speakerName}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>

        <LinearGradient
          colors={['#9963ea', '#8797D6']}
          start={{x: 0, y: 0.2}}
          end={{x: 1, y: 0.2}}
          style={styles.linearBg}>
          <TouchableHighlight
            onPress={() => Linking.openURL(`${speaker.url}`)}
            style={styles.button}>
            <Text style={styles.buttonText}>Read More on Wikipedia</Text>
          </TouchableHighlight>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default withNavigation(Speaker);
