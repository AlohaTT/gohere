import { createStore, applyMiddleware, } from 'redux';
import { middleware, } from '../navigator/AppNavigators';
import appReducer from '../reducer/index';

export default createStore(
  appReducer,
  applyMiddleware(middleware)
);