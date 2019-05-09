import type from '../../action/type';

const DEFAULT_STATE = {
  isLogin:false,
};
export default function onAction(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case type.CHECK_LOGIN:
    return { ...state, isLogin: action.isLogin, };

  default:
    return state;
  }

}