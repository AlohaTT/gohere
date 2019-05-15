import type from '../type';
import { fetchData, } from '../../util/FetchUtil';
import UserService from '../../api/service/UserService';
import NavigationUtil from '../../util/NavigationUtil';
import { AsyncStorage, } from 'react-native';
import Constants from '../../Constants';

/**
|--------------------------------------------------
| 获取用户登录状态，如果为登录状态，拉取用户信息
|--------------------------------------------------
*/
export function checkLogin() {
  return (dispatch) => {
    fetchData(UserService.ISLOGIN)
      .then(isLogin => {
        if (isLogin === 1) {
          onUserInfoUpdate(dispatch);
        } else {
          dispatch({ type: type.USER_UPDATE, userInfo: null, });
        }
      });
  };

}

/**
 * 获取用户信息
 */
export function onUserInfoUpdate(dispatch) {
  return fetchData(UserService.GETUSERINFO)
    .then((userInfo) => {
      dispatch({ type: type.USER_UPDATE, userInfo: userInfo, });
    });
}

/**
 * 登录
 * @param {*} params
 */
export function login(params, navigation) {
  return (dispatch) => {
    const { userName, } = params;

    _storeUsername(userName).then(() => {
      fetchData(UserService.LOGIN, params).then((token) => {
        /**
          |--------------------------------------------------
          | 保存token
          |--------------------------------------------------
          */
        _storeUsername();
        AsyncStorage.setItem(Constants.TOKEN, token)
          .then(onUserInfoUpdate(dispatch));
      }).then(() => NavigationUtil.goBack(navigation));
    }
    );
  };
}

const _storeUsername = async (username) => {
  await AsyncStorage.setItem(Constants.USERNAME, username);
};

export function logout(navigation) {
  return (dispatch) => {
    fetchData(UserService.LOGOUT)
      .then(() => {
        NavigationUtil.goBack(navigation);
        dispatch({ type: type.USER_UPDATE, userInfo: null, });
      });
  };

}