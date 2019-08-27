import React from 'react';
import {Text, View, SectionList} from 'react-native';
import {formatSessionData} from '../../lib/helper';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import SessionItem from '../../components/SessionItem';
import PropTypes from 'prop-types';

const Schedule = ({allSessions}) => {
  const formattedData = formatSessionData(allSessions);
  return (
    allSessions && (
      <View style={styles.scheduleContainer}>
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
      </View>
    )
  );
};
Schedule.propTypes = {
  allSessions: PropTypes.array.isRequired,
};

export default withNavigation(Schedule);
