import DefaultLayout from '../layout/default-layout';
import NoteCreator from '../components/note-creator';
import NoteList from '../components/note-list';
import React from 'react';

function Note() {

  return (
      <DefaultLayout>
        <NoteCreator/>
        <NoteList/>
      </DefaultLayout>
  );
}

export default Note;