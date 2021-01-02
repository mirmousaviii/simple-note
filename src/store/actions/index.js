import axios from "axios";

export const notify = (message) => {
  return {
    type: 'NOTIFY',
    message: message
  }
}

export const beQuiet = () => {
  return {
    type: 'BE_QUIET',
    message: ''
  }
}

export const showLoading = (status) => {
  return {
    type: 'SHOW_LOADING',
    loadingStatus: status
  }
}

export const getNoteList = (token) => {
  return (dispatch) => {
    dispatch(showLoading(true));
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
          dispatch(showLoading(false));
          dispatch(setNoteList((response.data)));
        })
        .catch((error) => {
          dispatch(showLoading(false));
          dispatch(notify(error.message));
        })
    );
  }
}

export const setNoteList = (noteList) => {
  return {
    type: 'GET_NOTE_LIST',
    noteList: noteList
  }
}


export const saveNote = (token, title, content) => {
  return (dispatch, getState) => {
    dispatch(showLoading(true));
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
          dispatch(showLoading(false));
          dispatch(addNote(getState().note.noteList, response.data));
          dispatch(notify('The note added to list.'))
        })
        .catch((error) => {
          dispatch(showLoading(false));
          dispatch(notify(error.message));
        })
    );
  }
}

export const addNote = (noteList, newNote) => {
  noteList.push(newNote);

  return {
    type: 'ADD_NOTE',
    noteList: noteList
  }
}


export const requestDeleteNote = (token, id, index) => {
  return (dispatch, getState) => {
    dispatch(showLoading(true));
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
        .then((response) => {
          dispatch(showLoading(false));
          dispatch(responseDeleteNote(getState().note.noteList, index));
          dispatch(notify('The note deleted!'))
        })
        .catch((error) => {
          dispatch(showLoading(false));
          dispatch(notify(error.message));
        })

    );
  }
}

export const responseDeleteNote = (noteList, index) => {
  noteList.splice(index, 1)

  return {
    type: 'DELETE_NOTE',
    noteList: noteList
  }
}