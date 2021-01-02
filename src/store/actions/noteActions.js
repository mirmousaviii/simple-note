import axios from "axios";
import {notify, toggleLoading} from "./coreActions";
import {getToken} from "./authActions";

export const requestNoteList = () => {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    dispatch(getToken())
      .then((token) => {
        return (
          axios
            .get(
              `${process.env.REACT_APP_BASE_URL}/notes`,
              {
                headers: {
                  "typ": "JWT",
                  "Authorization": `jwt ${token}`
                }
              }
            )
            .then((response) => {
              dispatch(toggleLoading(false));
              dispatch(receiveNoteList((response.data)));
            })
            .catch((error) => {
              dispatch(toggleLoading(false));
              dispatch(notify(error.message));
            })
        );
      });
  }
}

export const receiveNoteList = (noteList) => {
  return {
    type: 'RECEIVE_NOTE_LIST',
    noteList: noteList
  }
}

export const requestAddNote = (title, content) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading(true));
    dispatch(getToken())
      .then((token) => {
        return (
          axios
            .post(
              `${process.env.REACT_APP_BASE_URL}/notes`,
              {
                title: title,
                content: content
              },
              {
                headers: {
                  "typ": "JWT",
                  "Authorization": `jwt ${token}`
                }
              }
            )
            .then((response) => {
              dispatch(toggleLoading(false));
              dispatch(receiveAddNote(getState().note.noteList, response.data));
              dispatch(notify('The note added to list.'));
            })
            .catch((error) => {
              dispatch(toggleLoading(false));
              dispatch(notify(error.message));
            })
        );
      });
  }
}

export const receiveAddNote = (noteList, newNote) => {
  noteList.push(newNote);

  return {
    type: 'RECEIVE_ADD_NOTE',
    noteList: noteList
  }
}

export const requestDeleteNote = (token, id, index) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading(true));
    return (
      axios
        .delete(
          `${process.env.REACT_APP_BASE_URL}/notes/${id}`,
          {
            headers: {
              "typ": "JWT",
              "Authorization": `jwt ${token}`
            }
          }
        )
        .then(() => {
          dispatch(toggleLoading(false));
          dispatch(receiveDeleteNote(getState().note.noteList, index));
          dispatch(notify('The note deleted!'))
        })
        .catch((error) => {
          dispatch(toggleLoading(false));
          dispatch(notify(error.message));
        })

    );
  }
}

export const receiveDeleteNote = (noteList, index) => {
  noteList.splice(index, 1)

  return {
    type: 'RECEIVE_DELETE_NOTE',
    noteList: noteList
  }
}
