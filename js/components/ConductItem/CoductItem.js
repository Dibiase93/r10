import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);

    this.state = {
      isDescVisible: false,
    };
  }

  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => {
      this.state.isDescVisible === false
        ? this.setState({
            isDescVisible: true,
          })
        : this.setState({
            isDescVisible: false,
          });
    });
  };

  render() {
    conduct = this.props.conduct;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    let transformStyle = {transform: [{rotate: spin}]};
    return (
      <View>
        <TouchableWithoutFeedback
          style={styles.iconContainer}
          onPress={this.spin}>
          <Animated.View style={transformStyle}>
            {!this.state.isDescVisible ? (
              <Icon name="ios-add" size={30} />
            ) : (
              <Icon name="ios-remove" size={30} />
            )}
          </Animated.View>
          <Text>{conduct.title}</Text>
        </TouchableWithoutFeedback>
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
