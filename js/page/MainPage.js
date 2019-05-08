import React, { Component, } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';
import MainTabNavigator from '../navigator/MainTabNavigator';

export class MainPage extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    return <MainTabNavigator/>;
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
