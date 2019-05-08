import { combineReducers, } from 'redux';
import { navReducer, } from '../navigator/AppNavigators';

export default combineReducers({
  nav:navReducer,
});