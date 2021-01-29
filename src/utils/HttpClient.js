import axios from 'axios';
import { unsplashAuthKeys } from './authKeys';

export const HttpClient = (function () {
  function api({ method, endpoint = '', queryString = '', userData = {} }) {
    axios.defaults.headers[
      'Authorization'
    ] = `Client-ID ${unsplashAuthKeys.accessKey}`;
    const url = endpoint + queryString;
    return axios({
      baseURL: 'https://api.unsplash.com/',
      method,
      url: url,
      data: userData,
    });
  }

  return {
    get: ({ endpoint, queryString, data }) => {
      return api({ method: 'get', endpoint, queryString, data });
    },
    post: ({ endpoint, queryString, data }) => {
      return api({ method: 'post', endpoint, queryString, data });
    },
    put: ({ endpoint, queryString, data }) => {
      return api({ method: 'put', endpoint, queryString, data });
    },
    delete: ({ endpoint, queryString, data }) => {
      return api({ method: 'delete', endpoint, queryString, data });
    },
  };
})();

// export const HttpClient = {
//   get: ({ endpoint, queryString, data }) => {
//     return api({ method: 'get', endpoint, queryString, data });
//   },
//   post: ({ endpoint, queryString, data }) => {
//     return api({ method: 'post', endpoint, queryString, data });
//   },
//   put: ({ endpoint, queryString, data }) => {
//     return api({ method: 'put', endpoint, queryString, data });

//   },
//   delete: ({ endpoint, queryString, data }) => {
//     return api({ method: 'delete', endpoint, queryString, data });
//   }
// }
