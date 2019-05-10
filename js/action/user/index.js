import type from '../type';
import { fetchData, } from '../../util/FetchUtil';
import Userservice from '../../api/service/UserService';
import NavigationUtil from '../../util/NavigationUtil';

/**
|--------------------------------------------------
| 获取用户登录状态，如果为登录状态，拉取用户信息
|--------------------------------------------------
*/
export function onLoginStateChange() {
  return (dispatch) => {
    fetchData(Userservice.ISLOGIN)
      .then(isLogin => {
        if (isLogin === 1) {
          dispatch({ type: type.USER_UPDATE, isLogin: true, });
        } else {
          dispatch({ type: type.USER_UPDATE, isLogin: false, });
        }
      });
  };

}

/**
 * 获取用户信息
 */
export function onUserInfoUpdate() {
  return (dispatch) => {
    fetchData(Userservice.GETUSERINFO)
      .then((userInfo) => {
        dispatch({ type: type.USER_UPDATE, userInfo: userInfo, });
      });
  };
}

/**
 * 登录
 * @param {*} params
 */
export function login(params, navigation) {
  return (dispatch) => {
    fetchData(Userservice.LOGIN, params)
      .then((token) => {
        NavigationUtil.goBack(navigation);
        dispatch({type: type.USER_UPDATE, isLogin:true,});
      });
  };

}