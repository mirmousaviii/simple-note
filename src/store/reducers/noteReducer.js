const initialState = {
  noteList: []
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_NOTE_LIST':
    case 'RECEIVE_ADD_NOTE':
    case 'RECEIVE_DELETE_NOTE':
    return {
      ...state,
      noteList: action.noteList
    }
    default:
      return state;
  }
}