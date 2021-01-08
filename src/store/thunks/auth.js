import {getToken} from '../../api/auth';
import {push} from 'connected-react-router';
import {successLoadToken, successLogin} from '../actions/auth';
import {notify, toggleLoading} from '../actions/core';

export const requestLogin = (email, password) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    getToken({email, password}).then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      dispatch(toggleLoading(false));
      dispatch(successLogin(token));
      dispatch(push('/note'));
    }).catch((error) => {
      dispatch(toggleLoading(false));
      dispatch(notify(error.message));
    });
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