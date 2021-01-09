import {getToken} from '../../api/auth';
import {push} from 'connected-react-router';
import {successLoadToken, successLogin, successLogout} from '../actions/auth';
import {toggleLoading} from '../actions/core';

export const requestLogin = (email, password) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    getToken({email, password}).then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      dispatch(successLogin(token));
      dispatch(toggleLoading(false));
      dispatch(push('/note'));
    });
  };
};

export const requestLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch(successLogout());
    dispatch(push('/login'));
  };
};

export const requestToken = () => {
  return (dispatch) => {
    let token = localStorage.getItem('token');
    if (token) {
      dispatch(successLoadToken(token));
    }
  };
};