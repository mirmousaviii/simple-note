import React from "react";
import NoteCreator from "../component/NoteCreator";
import NoteList from "../component/NoteList";
import {Container} from "@material-ui/core";
import Notification from "../component/Notification";

function Main() {

  return (
    <Container maxWidth="md">
      <NoteCreator />
      <NoteList />
      <Notification />
    </Container>
  );
}

export default Main;