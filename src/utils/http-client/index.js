import axios from 'axios';
import {store} from '../../index';
import {notify, toggleLoading} from '../../store/actions/core';
import {push} from 'connected-react-router';

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
  store.dispatch(toggleLoading(false));
  store.dispatch(notify(error.response.data));
  if(error.response.status === 401) {
    localStorage.removeItem('token');
    store.dispatch(push('/login'));
  }
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