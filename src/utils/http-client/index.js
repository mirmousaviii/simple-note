import axios from 'axios';
import {store} from '../../index';

// Request interceptor
axios.interceptors.request.use((config) => {
  // Before request
  const token = store.getState().auth.token;
  return {
    ...config,
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...(token && {'Authorization': `jwt ${token}`}),
    },
  };
}, (error) => {
  // Request error
  return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use((response) => {
  // After response data
  return response;
}, (error) => {
  // Response error
  return Promise.reject(error);
});

const request = (method, url, data, params, config) => {
  return axios.request(
      {
        method,
        url,
        data,
        params,
        ...config,
      },
  );
};

export default request;