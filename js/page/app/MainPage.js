import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import MainTabNavigator from '../../navigator/MainTabNavigator';
import NavigationUtil from '../../util/NavigationUtil';

export class MainPage extends Component {

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <MainTabNavigator />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
