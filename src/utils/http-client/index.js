import axios from 'axios';

//TODO: make a login page and remove token form all of parts

function HttpClient(method, url, data, params, token) {
  let baseURL = process.env.REACT_APP_BASE_URL;

  return axios.request({
    method,
    baseURL,
    url,
    data,
    params,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...(token && {'Authorization': `jwt ${token}`}),
    },
  });
}

export default HttpClient;