import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

class CustomButton extends Component {
  render() {
    const {text, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});

export default CustomButton;
