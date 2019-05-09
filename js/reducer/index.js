import { combineReducers, } from 'redux';
import { navReducer, } from '../navigator/AppNavigators';
import userReducer from './user/index';

export default combineReducers({
  nav:navReducer,
  user:userReducer,
});