import axios from 'axios';
import url from 'url';

export class Http {
  static baseUrl = 'http://localhost:3001';

  static request(method, uri, data) {
    return axios[method.toLowerCase()](this.resolve(uri), data);
  }

  static get(uri) {
    return this.request('GET', uri);
  }

  static post(uri, data) {
    return this.request('POST', ...arguments);
  }

  static resolve(uri) {
    return url.resolve(Http.baseUrl, uri);
  }
}