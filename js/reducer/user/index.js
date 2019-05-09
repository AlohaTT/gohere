import type from '../../action/type';

const DEFAULT_STATE = {
  isLogin: false,
  userInfo: {},
};
export default function onAction(state = DEFAULT_STATE, action) {
  switch (action.type) {
  case type.USER_UPDATE:
    return { ...state, isLogin: action.isLogin, userInfo: action.userInfo, };

  default:
    return state;
  }

}