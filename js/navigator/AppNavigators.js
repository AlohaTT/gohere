import { createStackNavigator, createSwitchNavigator, createAppContainer, } from 'react-navigation';
import HomePage from '../page/HomePage';
import SplashPage from '../page/SplashPage';
import { createNavigationReducer, createReduxContainer, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import { connect, } from 'react-redux';
import MainPage from '../page/MainPage';
import LoginPage from '../page/LoginPage';
import TestPage from '../page/TestPage';

const MainNavigator = createStackNavigator({
  Main: {
    screen:MainPage,
    navigationOptions: {
      header: null,
    },
  },
  Login:{
    screen:LoginPage,
  },
  Test:{
    screen:TestPage,
  },
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