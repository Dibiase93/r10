import React from 'react';
import {Text, View, SectionList, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Schedule = ({allSessions, navigation, faveIds}) => {
  const formattedData = formatSessionData(allSessions);

  const heartIcon = <Icon name="ios-heart" size={25} color={'red'} />;

  return (
    allSessions && (
      <View>
        <SectionList
          sections={formattedData}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('Session', {
                  item,
                });
              }}>
              <View>
                <Text style={styles.content}>{item.title}</Text>
                <Text style={styles.content}>{item.location}</Text>
                {faveIds.includes(item.id) ? heartIcon : null}
              </View>
            </TouchableHighlight>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sessionHeader}>{title}</Text>
          )}
          keyExtractor={(item, index) => item.id + ''}
        />
      </View>
    )
  );
};

export default withNavigation(Schedule);
