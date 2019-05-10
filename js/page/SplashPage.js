import React, { Component, } from 'react';
import { View, Text,ImageBackground, Image,} from 'react-native';
import { connect, } from 'react-redux';
import NavigationUtil from '../util/NavigationUtil';

export default class SplashPage extends Component {

  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToMainPage({
        navigation: this.props.navigation,
      });
    }, 200);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <Image source={require('../../res/drawable/app_splash.webp')}
        style={{ width: '100%', height: '100%',}}
      >
      </Image>
    );
  }
}
