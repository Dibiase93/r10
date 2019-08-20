import React from 'react';
import {Text, View, SectionList, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const Schedule = ({allSessions, navigation}) => {
  //   console.log(allSessions);

  const formattedData = formatSessionData(allSessions);

  return (
    allSessions && (
      <View style={styles.sessionContainer}>
        <SectionList
          sections={formattedData}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('Session', {
                  itemId: item.id,
                });
              }}>
              <View>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
              </View>
            </TouchableHighlight>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sessionHeader}>{title}This is title</Text>
          )}
          keyExtractor={(item, index) => item.id + ''}
        />
      </View>
    )
  );
};

export default withNavigation(Schedule);
