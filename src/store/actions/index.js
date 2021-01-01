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
          console.log(error);
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


//Get Token
//Update token
//Save Note
//Get Note List
//Delete Note