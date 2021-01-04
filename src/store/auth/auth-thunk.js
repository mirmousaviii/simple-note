import {notify} from '../core/core-actions';
import {getToken} from '../../api/auth';

export const requestToken = () => {
  return (dispatch) => {
    if (localStorage.getItem('token')) {
      return Promise.resolve(localStorage.getItem('token'));
    }

    const data = {
      email: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    };
    return Promise.resolve(
        getToken(data).then((response) => {
          localStorage.setItem('token', response.data.token);
          return localStorage.getItem('token');
        }).catch((error) => {
          dispatch(notify(error.message));
        }),
    );
  };
};