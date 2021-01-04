import {notify} from '../core/core-actions';
import {getToken} from '../../api/auth';

export const requestToken = () => {
  return (dispatch) => {
    if (localStorage.getItem('token')) {
      return Promise.resolve(localStorage.getItem('token'));
    }

    return Promise.resolve(
        getToken.then((response) => {
          localStorage.setItem('token', response.data.token);
          return localStorage.getItem('token');
        }).catch((error) => {
          dispatch(notify(error.message));
        }),
    );
  };
};