import React from 'react';
import {
  AppBar, Box,
  IconButton,
  Toolbar, Tooltip,
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
import {requestLogout} from '../store/thunks/auth';

function Header({auth, logout}) {
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
          <Tooltip title="Home" aria-label="Home">
            <IconButton edge="start"
                        color="inherit"
                        aria-label="Home"
                        component={Link}
                        to="/">
              <HomeRounded/>
            </IconButton>
          </Tooltip>
          {auth.isAuthenticated ?
              <>
                <Tooltip title="Note" aria-label="Note">
                  <IconButton edge="start"
                              color="inherit"
                              aria-label="Note"
                              component={Link}
                              to="/note">
                    <NotesRounded/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Logout" aria-label="Logout">
                  <IconButton edge="start"
                              color="inherit"
                              aria-label="Logout"
                              onClick={logout}>
                    <ExitToAppRounded/>
                  </IconButton>
                </Tooltip>
              </>
              :
              <Tooltip title="Login" aria-label="Login">
                <IconButton edge="start"
                            color="inherit"
                            aria-label="Login"
                            component={Link}
                            to="/login">
                  <PersonRounded/>
                </IconButton>
              </Tooltip>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(requestLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);