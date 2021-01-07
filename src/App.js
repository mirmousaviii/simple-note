import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {routes, redirects} from './routes';
import PrivateRoute from './utils/private_route/private-route';
import {connect} from 'react-redux';
import {requestToken} from './store/thunks/auth';

function App(props) {

  // TODO: Fix load token for first time
  React.useEffect(() => {
    props.loadToken();
  }, []);

  return (
      <ConnectedRouter history={props.history}>
        <Switch>
          {routes.map((item, index) => (
                  <PrivateRoute {...item}
                                isAuthenticated={Boolean(props.auth.token)}
                                key={index}/>
              ),
          )}
          {redirects.map((item, index) => (
                  <Redirect {...item} key={index}/>
              ),
          )}
        </Switch>
      </ConnectedRouter>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {

    loadToken: () => dispatch(requestToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);