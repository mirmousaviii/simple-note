import axios from 'axios';

function HttpClient(method, url, data, params, token) {
  let baseURL = process.env.REACT_APP_BASE_URL;

  return axios.request({
    method,
    baseURL,
    url,
    data,
    params,
    headers: {
      'typ': 'JWT',
      'Authorization': `jwt ${token}`,
    },
  });
}

export default HttpClient;