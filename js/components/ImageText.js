import React, { Component, } from 'react';
import { Text, StyleSheet, View, Image, } from 'react-native';
import PropTypes from 'prop-types';

export default class ImageText extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.text,
    source: PropTypes.string,
  }

  static defaultProps = {
    width: 30,
    height: 30,
    fontSize: 12,
  }

  render() {
    return (
      <View>
        <Image
          height={this.props.height}
          onPress={this.props.onPress}
          source={require('../res/drawable/user_all_orders.png')}
          style={{ resizeMode: 'contain', }}
          width={this.props.width}
        />
        <Text> {this.props.text} </Text>
      </View>
    );
  }
}

ImageText.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.text,
  src: PropTypes.string,
};

const styles = StyleSheet.create({});
