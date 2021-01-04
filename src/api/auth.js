import axios from 'axios';

export const getToken = ()=> {
  return axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/token`,
      {
        email: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      });
}