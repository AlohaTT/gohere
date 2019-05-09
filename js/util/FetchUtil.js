import { BASE_URL, } from '../api/Api';
import { Toast, } from '@ant-design/react-native';

const DEFAULT_URL = BASE_URL;

const POST = 'POST';
const GET = 'GET';
export function fetchData(url, param = {}, method = POST) {
  url = DEFAULT_URL + url;
  let headers = {};
  let body = {};
  let res = {};
  if (method == POST) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    body = JSON.stringify(param);
    res={method,headers,body,};
    console.log(body);
  } else if (method == GET) {
    if (param) {
      const paramsArray = [];
      //拼接参数
      Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]));
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    res={method,};
  }
  return new Promise((resolve, reject) => {
    fetch(url, res)
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
          Toast.fail(json.message);
        }
      })
      .catch((error) => {
        reject(error);
      });

  });

}
