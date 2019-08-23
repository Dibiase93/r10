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

  //   componentDidMount() {
  //     this.spin();
  //   }

  spin = () => {
    if (this.state.isDescVisible === false) {
      this.setState({
        isDescVisible: true,
      });
    } else if (this.state.isDescVisible === true) {
      this.setState({
        isDescVisible: false,
      });
    }
  };

  render() {
    conduct = this.props.conduct;
    return (
      <View>
        <TouchableOpacity onPress={this.spin}>
          <View>
            <Icon name="ios-add" />
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
