import Config from 'react-native-config';
import axios from 'axios';

axios.defaults.baseURL = Config.BASE_URL;

axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    return error;
  },
);

axios.interceptors.response.use(
  response => {
    response.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return response;
  },
  error => {
    return error;
  },
);

const apiGET = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, reqBody)
      .then(res => {
        resolve(res?.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const apiPOST = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, reqBody)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
const apiPUT = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, reqBody)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const apiDEL = url => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export {apiGET, apiPOST, apiPUT, apiDEL};
