import React from "react";
import NoteCreator from "./NoteCreator";
import NoteList from "./NoteList";
import {Container, CssBaseline} from "@material-ui/core";
import Header from "./Header";
import Notification from "./Notification";
import Loading from "./Loading";
import Footer from "./Footer";


function Layout({children}) {

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container maxWidth="md">
        {children}
      </Container>
      <Notification/>
      <Loading/>
      <Footer/>
    </>

  );
}

export default Layout;