export const successNoteList = (noteList) => {
  return {
    type: 'SUCCESS_NOTE_LIST',
    noteList: noteList
  }
}

export const successAddNote = (newNote) => {
  return {
    type: 'SUCCESS_ADD_NOTE',
    newNote: newNote
  }
}

export const successDeleteNote = (index) => {
  return {
    type: 'SUCCESS_DELETE_NOTE',
    noteIndex: index
  }
}
