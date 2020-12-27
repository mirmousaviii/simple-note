import React from 'react';
import {Container, Link, Typography} from "@material-ui/core";

function Footer() {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary">
          {'Copyright © '}
          <Link color="inherit" href="https://mirmousavi.com/">
            mirmousavi.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;