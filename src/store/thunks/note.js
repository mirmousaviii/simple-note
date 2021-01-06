import {notify, toggleLoading} from '../actions/core';
import {
  successDeleteNote,
  successAddNote,
  successNoteList,
} from '../actions/note';
import {addNote, deleteNote, getNoteList} from '../../api/notes';

export const requestNoteList = () => {
  return (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const token = getState().auth.token;
    getNoteList(token).then((response) => {
      dispatch(toggleLoading(false));
      dispatch(successNoteList((response.data)));
    }).catch((error) => {
      dispatch(toggleLoading(false));
      dispatch(notify(error.message));
    });
  };
};

export const requestAddNote = (title, content) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const token = getState().auth.token;
    addNote(token, {title, content}).then((response) => {
      dispatch(toggleLoading(false));
      dispatch(successAddNote(response.data));
      dispatch(notify('The note added to list.'));
    }).catch((error) => {
      dispatch(toggleLoading(false));
      dispatch(notify(error.message));
    });
  };
};

export const requestDeleteNote = (id, index) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading(true));
    const token = getState().auth.token;
    deleteNote(token, id).then(() => {
      dispatch(toggleLoading(false));
      dispatch(successDeleteNote(index));
      dispatch(notify('The note deleted!'));
    }).catch((error) => {
      dispatch(toggleLoading(false));
      dispatch(notify(error.message));
    });
  };
};
