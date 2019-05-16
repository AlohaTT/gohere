import React, { Component, } from 'react';
import { StatusBar, ToastAndroid, } from 'react-native';
import { connect, } from 'react-redux';
import MainTabNavigator from '../../navigator/MainTabNavigator';
import NavigationUtil from '../../util/NavigationUtil';
import action from '../../action';
import SafeAreaViewPlus from '../../components/SafeAreaViewPlus';
import { BackHandler, } from 'react-native';

type Props = {};

let lastBackPressed = Date.now();

export class MainPage extends Component<Props>{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { checkLogin, } = this.props;
    checkLogin();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  /**
  |--------------------------------------------------
  | 处理Android返回键
  |--------------------------------------------------
  */
  onBackPress = () => {
    const { nav, } = this.props;
    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      BackHandler.exitApp();
      return true;
    }
    lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    if (nav.routes[1].index !== 0) {//如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
      return false;
    }
    return true;
  };

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
