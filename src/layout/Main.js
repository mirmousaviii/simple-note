import React from "react";
import NoteCreator from "../component/NoteCreator";
import NoteList from "../component/NoteList";
import {Container} from "@material-ui/core";
import Notification from "../component/Notification";
import Loading from "../component/Loading";

function Main() {

  return (
    <Container maxWidth="md">
      <NoteCreator />
      <NoteList />
      <Notification />
      <Loading />
    </Container>
  );
}

export default Main;