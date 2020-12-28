import React from 'react';
import {Box, Container, Divider, Link, Typography} from "@material-ui/core";

function Footer() {
  return (
    <footer>
      <Container>
        <Divider />
        <Typography variant="body2" color="textSecondary">
          <Box textAlign="center" m={1}>
          A simple note by {' '}
          <Link color="inherit" href="https://mirmousavi.com/">
            mirmousavi.com
          </Link>{' '}
          &#9679; 2019 - {new Date().getFullYear()}
          </Box>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;