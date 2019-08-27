import React from 'react';
import {Text, View, SectionList, TouchableHighlight} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import SessionItem from '../../components/SessionItem';
import moment from 'moment';
import PropTypes from 'prop-types';

const Faves = ({allSessions, faveIds}) => {
  console.log(allSessions);
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

Faves.propTypes = {
  faveIds: PropTypes.array.isRequired,
  allSessions: PropTypes.array.isRequired,
};
export default withNavigation(Faves);
