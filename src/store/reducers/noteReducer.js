const initialState = {
  noteList: []
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTE_LIST':
      return {
        ...state,
        noteList: action.noteList
      }
    default:
      return {
        ...state
      }
  }
}