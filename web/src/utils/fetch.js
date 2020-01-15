

import axios from 'axios';

let fetch = axios.create({
  // baseUrl: process.env.BASE_API,
  timeout: '60000',
  headers: {
    // 'Content-Type': 'application/json;charset=UTF-8',
  },
});

fetch.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  response => {
    console.log(response);
  
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

fetch.getAjax = function(url, params) {
  return fetch.get(url, {
    params: params,
  });
};

fetch.postAjax = function(url, params, config) {
  return fetch.post(url, params, config);
};

fetch.putAjax = function(url, params) {
  // return fetch.post(url, qs.stringify(params))
  return fetch.put(url, params);
};

export default fetch;
