import React from 'react';
import {Box, Container, CssBaseline} from '@material-ui/core';
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
          <Box m={4}>
            {children}
          </Box>
        </Container>
        <Notification/>
        <Loading/>
        <Footer/>
      </>

  );
}

export default DefaultLayout;