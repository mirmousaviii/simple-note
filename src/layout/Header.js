import React from 'react';
import {AppBar, CssBaseline, Toolbar, Typography} from "@material-ui/core";

function Header() {
  return (
    <AppBar position="relative" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Note manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;