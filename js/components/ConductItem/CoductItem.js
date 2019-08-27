import React, {Component} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

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
      <View style={styles.conductItemContainer}>
        <TouchableWithoutFeedback
          style={styles.iconTitleContainer}
          onPress={this.spin}>
          {!this.state.isDescVisible ? (
            <Animated.View style={transformStyle}>
              <Icon
                name="ios-add"
                size={20}
                color={'#9963ea'}
                allowFontScaling={true}
              />
            </Animated.View>
          ) : (
            <Icon
              name="ios-remove"
              size={20}
              color={'#9963ea'}
              allowFontScaling={true}
            />
          )}

          <Text style={styles.conductTitle}>{conduct.title}</Text>
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

ConductItem.propTypes = {
  conduct: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ConductItem;
