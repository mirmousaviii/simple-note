import React from "react";
import NoteCreator from "../component/NoteCreator";
import NoteList from "../component/NoteList";
import {Container} from "@material-ui/core";


function Main() {

  return (
    <Container maxWidth="md">
      <NoteCreator />
      <NoteList />
    </Container>
  );
}

export default Main;