const initialState = {
  noteList: [],
};

export const note = (state = initialState, action) => {
  let noteList = [...state.noteList];

  switch (action.type) {
    case 'SUCCESS_NOTE_LIST':
      return {
        ...state,
        noteList: action.noteList,
      };
    case 'SUCCESS_ADD_NOTE':
      noteList.push(action.newNote);
      return {
        ...state,
        noteList: noteList,
      };
    case 'SUCCESS_DELETE_NOTE':
      noteList.splice(action.noteIndex, 1);
      return {
        ...state,
        noteList: noteList,
      };
    default:
      return state;
  }
};