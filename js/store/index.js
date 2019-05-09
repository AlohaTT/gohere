import { createStore, applyMiddleware, } from 'redux';
import { middleware, } from '../navigator/AppNavigators';
import appReducer from '../reducer/index';
import thunk from 'redux-thunk';

const middlewares=[
  thunk,
  middleware,
];

export default createStore(
  appReducer,
  applyMiddleware(...middlewares)
);