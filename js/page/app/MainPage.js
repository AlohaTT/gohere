import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import MainTabNavigator from '../../navigator/MainTabNavigator';
import NavigationUtil from '../../util/NavigationUtil';
import action from '../../action';

export class MainPage extends Component {
  componentDidMount() {
    const{checkLogin,} = this.props;
    checkLogin();
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <MainTabNavigator />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(action.checkLogin()),

});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
