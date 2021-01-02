import Layout from "../components/Layout";
import NoteCreator from "../components/NoteCreator";
import NoteList from "../components/NoteList";
import React from "react";

function Note() {

  return (
    <Layout>
      <NoteCreator />
      <NoteList />
    </Layout>
  );
}

export default Note;