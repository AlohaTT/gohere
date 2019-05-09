import type from '../type';
import { fetchData, } from '../../util/FetchUtil';
import Api from '../../api/Api';

export default function onLoginStateChange() {
  return (dispatch) => {
    fetchData(Api.ISLOGIN)
      .then(isLogin => {
        if (isLogin === 1) {
          dispatch({ type: type.CHECK_LOGIN, isLogin: true, });
        } else {
          dispatch({ type: type.CHECK_LOGIN, isLogin: false, });
        }
      });
  };

}
