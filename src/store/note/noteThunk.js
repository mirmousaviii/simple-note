import axios from 'axios';
import {notify, toggleLoading} from '../core/core-actions';
import {requestToken} from '../auth/auth-thunk';
import {
  successDeleteNote,
  successAddNote,
  successNoteList,
} from './noteActions';

export const requestNoteList = () => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    dispatch(requestToken()).then((token) => {
      return (
          axios.get(
              `${process.env.REACT_APP_BASE_URL}/notes`,
              {
                headers: {
                  'typ': 'JWT',
                  'Authorization': `jwt ${token}`,
                },
              },
          ).then((response) => {
            dispatch(toggleLoading(false));
            dispatch(successNoteList((response.data)));
          }).catch((error) => {
            dispatch(toggleLoading(false));
            dispatch(notify(error.message));
          })
      );
    });
  };
};

export const requestAddNote = (title, content) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    dispatch(requestToken()).then((token) => {
      return (
          axios.post(
              `${process.env.REACT_APP_BASE_URL}/notes`,
              {
                title: title,
                content: content,
              },
              {
                headers: {
                  'typ': 'JWT',
                  'Authorization': `jwt ${token}`,
                },
              },
          ).then((response) => {
            dispatch(toggleLoading(false));
            dispatch(successAddNote(response.data));
            dispatch(notify('The note added to list.'));
          }).catch((error) => {
            dispatch(toggleLoading(false));
            dispatch(notify(error.message));
          })
      );
    });
  };
};

export const requestDeleteNote = (id, index) => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    dispatch(requestToken()).then((token) => {
      return (
          axios.delete(
              `${process.env.REACT_APP_BASE_URL}/notes/${id}`,
              {
                headers: {
                  'typ': 'JWT',
                  'Authorization': `jwt ${token}`,
                },
              },
          ).then(() => {
            dispatch(toggleLoading(false));
            dispatch(successDeleteNote(index));
            dispatch(notify('The note deleted!'));
          }).catch((error) => {
            dispatch(toggleLoading(false));
            dispatch(notify(error.message));
          })

      );
    });
  };
};
