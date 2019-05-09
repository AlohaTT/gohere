import type from '../type';
import { fetchData, } from '../../util/FetchUtil';
import Userservice from '../../api/service/UserService';

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

export function onUserInfoUpdate() {
  return (dispatch) => {
    fetchData(Userservice.GETUSERINFO)
      .then((userInfo) => {
        dispatch({type:type.USER_UPDATE, userInfo:userInfo,});
      });
  };

}


