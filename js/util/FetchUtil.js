import { BASE_URL, } from '../api/Api';
import Page from '../bean/Page';

const DEFAULT_URL = BASE_URL;
export default class FetchUtil {

  static fetch(url, param = {}) {
    url = DEFAULT_URL +url;
    return fetch(url, {
      body: JSON.stringify(param),
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(json => {
        if (json.code == 0) {
          return json.result;
        }
      })
      .catch(error => console.error(error));
  }

}