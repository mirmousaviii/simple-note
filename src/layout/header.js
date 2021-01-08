import React from 'react';
import {
  AppBar, Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  PersonRounded,
  EventNoteRounded,
  ExitToAppRounded,
  HomeRounded,
  NotesRounded,
} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header({auth}) {
  return (
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton edge="start" color="inherit" aria-label="menu">*/}
          {/*  <EventNote/>*/}
          {/*</IconButton>*/}
          <EventNoteRounded/>
          <Box flexGrow={1}>
            <Typography variant="h5" component="h1" color="inherit">
              ‌ Note manager
            </Typography>
          </Box>
          <IconButton edge="start"
                      color="inherit"
                      aria-label="Home"
                      component={Link}
                      to="/home">
            <HomeRounded/>
          </IconButton>
          {auth.isAuthenticated ?
              <>
                <IconButton edge="start"
                            color="inherit"
                            aria-label="Home"
                            component={Link}
                            to="/note">
                  <NotesRounded/>
                </IconButton>
                <IconButton edge="start"
                            color="inherit"
                            aria-label="Logout"
                            component={Link}
                            to="/logout">
                  <ExitToAppRounded/>
                </IconButton>
              </>
              :
              <IconButton edge="start"
                          color="inherit"
                          aria-label="Login"
                          component={Link}
                          to="/login">
                <PersonRounded/>
              </IconButton>
          }

        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);