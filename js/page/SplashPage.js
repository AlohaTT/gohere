import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import { connect, } from 'react-redux';
import NavigationUtil from '../util/NavigationUtil';

export default  class SplashPage extends Component {

  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomPage({
        navigation: this.props.navigation,
      });
    }, 200);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View>
        <Text> Splash </Text>
      </View>
    );
  }
}
