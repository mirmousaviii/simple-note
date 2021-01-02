import axios from "axios";
import {notify} from "../core/coreActions";

export const requestToken = () => {
  return (dispatch) => {
    if(localStorage.getItem('token')) {
      return Promise.resolve(localStorage.getItem('token'));
    }

    return Promise.resolve(axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/auth/token`,
        {
          email: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        return localStorage.getItem('token');
      })
      .catch((error) => {
        dispatch(notify(error.message));
      }));
  }
}