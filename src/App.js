import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {routes, redirects} from './routes';
import PrivateRoute from './utils/private-route/private-route';
import {connect} from 'react-redux';
import {requestToken} from './store/thunks/auth';

function App(props) {

  React.useEffect(() => {
    props.loadToken();
  }, []);

  if (props.auth.token || !localStorage.getItem('token')) {
    return (
        <ConnectedRouter history={props.history}>
          {redirects.map((item, index) => (
                  <Redirect {...item} key={index}/>
              ),
          )}

          <Switch>
            {routes.map((item, index) => (
                    <PrivateRoute {...item}
                                  isAuthenticated={Boolean(props.auth.token)}
                                  key={index}/>
                ),
            )}
          </Switch>
        </ConnectedRouter>
    );
  }

  return null;
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