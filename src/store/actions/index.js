import axios from "axios";
import store from "../index";

export const notify = (message) => {
  return {
    type: 'NOTIFY',
    message: message
  }
}

export const showLoading = (status) => {
  return {
    type: 'SHOW_LOADING',
    loadingStatus: status
  }
}


export const getToken = () => {
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
        dispatch(showLoading(false));
        dispatch(notify(error.message));
      }));
  }
}

export const getNoteList = () => {
  return (dispatch) => {
    dispatch(showLoading(true));
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
              dispatch(showLoading(false));
              dispatch(getNoteListReceiveSuccess((response.data)));
            })
            .catch((error) => {
              dispatch(showLoading(false));
              dispatch(notify(error.message));
            })
        );
      });
  }
}

export const getNoteListReceiveSuccess = (noteList) => {
  return {
    type: 'GET_NOTE_LIST',
    noteList: noteList
  }
}


export const addNoteRequest = (title, content) => {
  return (dispatch, getState) => {
    dispatch(showLoading(true));
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
              dispatch(showLoading(false));
              dispatch(addNoteReceiveSuccess(getState().note.noteList, response.data));
              dispatch(notify('The note added to list.'))
            })
            .catch((error) => {
              dispatch(showLoading(false));
              dispatch(notify(error.message));
            })
        );
      });
  }
}

export const addNoteReceiveSuccess = (noteList, newNote) => {
  noteList.push(newNote);

  return {
    type: 'ADD_NOTE',
    noteList: noteList
  }
}


export const deleteNoteRequest = (token, id, index) => {
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
        .then(() => {
          dispatch(showLoading(false));
          dispatch(deleteNoteReceiveSuccess(getState().note.noteList, index));
          dispatch(notify('The note deleted!'))
        })
        .catch((error) => {
          dispatch(showLoading(false));
          dispatch(notify(error.message));
        })

    );
  }
}

export const deleteNoteReceiveSuccess = (noteList, index) => {
  noteList.splice(index, 1)

  return {
    type: 'DELETE_NOTE',
    noteList: noteList
  }
}
