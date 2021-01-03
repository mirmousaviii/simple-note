import React from 'react';
import {Container, CssBaseline} from '@material-ui/core';
import Header from './header';
import Notification from '../components/notification';
import Loading from '../components/loading';
import Footer from './footer';

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