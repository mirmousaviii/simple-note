import DefaultLayout from '../layout/default-layout';
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField, Typography,
} from '@material-ui/core';
import {connect} from 'react-redux';
import {requestLogin} from '../store/thunks/auth';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.login(email, password);
  }

  return (
      <DefaultLayout>
        <Box mx={30}>
          <Card>
            <Box m={1}>
              <CardContent>
                <Typography variant="h5" component="h5" color="textSecondary">
                  Login
                </Typography>
                <form
                    autoComplete="off"
                    onSubmit={(e) => handleSubmit(e)}>
                  <Box my={2}>
                    {/*  TODO: Use validation*/}
                    <TextField label="Email"
                               fullWidth
                               required
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                    />
                  </Box>
                  <Box my={2}>
                    {/*  TODO: Toggle for show and hide password*/}
                    <TextField label="Password"
                               type="password"
                               fullWidth
                               required
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                    />
                  </Box>
                  <Box mt={3}>
                    <Button variant="contained"
                            color="primary"
                            type='submit'
                    >Login</Button>
                  </Box>
                </form>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </DefaultLayout>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(requestLogin(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);