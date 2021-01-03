import React from "react";
import {Container, CssBaseline} from "@material-ui/core";
import Header from "./Header";
import Notification from "../components/Notification";
import Loading from "../components/Loading";
import Footer from "./Footer";


function DefaultLayout({children}) {

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

export default DefaultLayout;