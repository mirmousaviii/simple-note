import DefaultLayout from "../layout/DefaultLayout";
import NoteCreator from "../components/NoteCreator";
import NoteList from "../components/NoteList";
import React from "react";

function Note() {

  return (
    <DefaultLayout>
      <NoteCreator />
      <NoteList />
    </DefaultLayout>
  );
}

export default Note;