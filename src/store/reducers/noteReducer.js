const initialState = {
  noteList: []
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTE_LIST':
    case 'ADD_NOTE':
    case 'DELETE_NOTE':
    return {
      ...state,
      noteList: action.noteList
    }
    default:
      return state;
  }
}