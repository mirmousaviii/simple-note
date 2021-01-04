import axios from 'axios';

export const getNoteList = (token) => {
  return axios.get(
      `${process.env.REACT_APP_BASE_URL}/notes`,
      {
        headers: {
          'typ': 'JWT',
          'Authorization': `jwt ${token}`,
        },
      });
};

export const addNote = (token, obj) => {
  return axios.post(
      `${process.env.REACT_APP_BASE_URL}/notes`,
      obj,
      {
        headers: {
          'typ': 'JWT',
          'Authorization': `jwt ${token}`,
        },
      },
  );
};

export const deleteNote = (token, id) => {
  return axios.delete(
      `${process.env.REACT_APP_BASE_URL}/notes/${id}`,
      {
        headers: {
          'typ': 'JWT',
          'Authorization': `jwt ${token}`,
        },
      },
  );
};