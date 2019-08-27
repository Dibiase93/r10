import React from 'react';
import {Text, View, SectionList, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import SessionItem from '../../components/SessionItem';
import moment from 'moment';

const Faves = ({allSessions, navigation, faveIds}) => {
  const formattedData = formatSessionData(allSessions);

  return (
    allSessions && (
      <View>
        {faveIds.length === 0 ? (
          <Text>No Faves</Text>
        ) : (
          <SectionList
            sections={formattedData}
            renderItem={({item}) => <SessionItem item={item} />}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.sessionHeader}>
                {moment(`${title}`).format('h:mm A')}
              </Text>
            )}
            keyExtractor={(item, index) => item.id + ''}
          />
        )}
      </View>
    )
  );
};

export default withNavigation(Faves);
