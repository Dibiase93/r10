import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {
      isDescVisible: false,
    };
  }

  spin = () => {
    this.state.isDescVisible === false
      ? this.setState({
          isDescVisible: true,
        })
      : this.setState({
          isDescVisible: false,
        });
  };

  render() {
    conduct = this.props.conduct;
    return (
      <View>
        <TouchableOpacity onPress={this.spin}>
          <View>
            {!this.state.isDescVisible ? (
              <Icon name="ios-add" />
            ) : (
              <Icon name="ios-remove" />
            )}
            {/* <Icon name="ios-add" />
            <Icon name="ios-remove" /> */}
            <Text>{conduct.title}</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={
            this.state.isDescVisible
              ? styles.description
              : styles.descriptionHidden
          }>
          {conduct.description}
        </Text>
      </View>
    );
  }
}

export default ConductItem;
