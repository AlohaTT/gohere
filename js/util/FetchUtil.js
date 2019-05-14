import { BASE_URL, } from '../api/Api';
import { ToastAndroid, AsyncStorage, } from 'react-native';

const DEFAULT_URL = BASE_URL;

const POST = 'POST';
const GET = 'GET';
export function fetchData(url, param = {}, method = POST) {
  return new Promise((resolve, reject) => {

    _getToken().then((token) => {
      url = DEFAULT_URL + url;
      let res = {};
      if (method == POST) {
        (res = genPostBody(token, param));
      } else if (method == GET) {
        ({ url, res, } = genGetBody(token, param, url));
      }
      fetch(url, { ...res, method: method, })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((json) => {
          if (json.code === 0) {
            resolve(json.result);
          } else {
            console.log(json.message);
            ToastAndroid.show(json.message, ToastAndroid.SHORT);
            reject(json.message);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

}

/**
 * 生成psot请求参数
 * @param {*} param
 */
function genPostBody(token, param) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'QuantDo-Token': token,
  };
  const body = JSON.stringify(param);
  console.log(body);
  return { headers, body, };
}

/**
 * 生成get请求参数
 * @param {*} param
 * @param {*} url
 */
function genGetBody(token, param, url) {
  const headers = {
    'QuantDo-Token': token,
  };
  if (param) {
    const paramsArray = [];
    //拼接参数
    Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]));
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    }
    else {
      url += '&' + paramsArray.join('&');
    }
  }
  return { url, headers,};
}

const _getToken = async () => {
  return await AsyncStorage.getItem('token');
};

