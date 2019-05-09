import { combineReducers, } from 'redux';
import { navReducer, } from '../navigator/AppNavigators';
import loginReducer from './login/index';

export default combineReducers({
  nav:navReducer,
  login:loginReducer,
});