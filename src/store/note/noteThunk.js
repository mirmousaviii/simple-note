import {notify, toggleLoading} from '../core/core-actions';
import {requestToken} from '../auth/auth-thunk';
import {
  successDeleteNote,
  successAddNote,
  successNoteList,
} from './noteActions';
import {addNote, deleteNote, getNoteList} from '../../api/notes';

export const requestNoteList = () => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    dispatch(requestToken()).then((token) => {
      return (
          getNoteList(token).then((response) => {
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
          addNote(token, {title, content}).then((response) => {
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
          deleteNote(token, id).then(() => {
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
