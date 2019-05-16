import React, { Component, } from 'react';
import { StatusBar, } from 'react-native';
import { connect, } from 'react-redux';
import MainTabNavigator from '../../navigator/MainTabNavigator';
import NavigationUtil from '../../util/NavigationUtil';
import action from '../../action';
import SafeAreaViewPlus from '../../components/SafeAreaViewPlus';

export class MainPage extends Component {
  componentDidMount() {
    const { checkLogin, } = this.props;
    checkLogin();
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <SafeAreaViewPlus>
      <StatusBar backgroundColor="white"
        barStyle="dark-content"
      />
      <MainTabNavigator />
    </SafeAreaViewPlus>;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(action.checkLogin()),

});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
