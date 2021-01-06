import React from 'react';
import {Box, Container, Divider, Link, Typography} from '@material-ui/core';

function Footer() {
  return (
      <footer>
        <Container>
          <Divider/>
          <Box textAlign="center" m={2}>
            <Typography variant="body2" color="primary">
              A simple note by {' '}
              <Link color="inherit" href="https://mirmousavi.com/">
                mirmousavi.com
              </Link>{' '}
              &#9679; 2020 - {new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </footer>
  );
}

export default Footer;