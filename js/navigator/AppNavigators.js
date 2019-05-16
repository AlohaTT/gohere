import { createStackNavigator, createSwitchNavigator, createAppContainer, } from 'react-navigation';
import HomePage from '../page/app/HomePage';
import SplashPage from '../page/app/SplashPage';
import { createNavigationReducer, createReduxContainer, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import { connect, } from 'react-redux';
import MainPage from '../page/app/MainPage';
import LoginPage from '../page/moduleUser/LoginPage';
import TestPage from '../page/TestPage';
import SettingPage from '../page/moduleUser/SettingPage';

const MainNavigator = createStackNavigator({
  Main: {
    screen:MainPage,
  },
  Login:{
    screen:LoginPage,
  },
  Setting:{
    screen:SettingPage,
    navigationOptions: {
      title: '设置',
    },
  },
  Test:{
    screen:TestPage,
  },
}, {
  headerMode: 'none',
});

const SplashNavigator = createStackNavigator({
  Splash: {
    screen: SplashPage,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const AppNavigator = createSwitchNavigator({
  Splash: SplashNavigator,
  Main: MainNavigator,
},{
  headerMode: 'none',
});
export const navReducer = createNavigationReducer(AppNavigator);

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppContainer = createReduxContainer(AppNavigator);

export default connect(mapStateToProps)(AppContainer);