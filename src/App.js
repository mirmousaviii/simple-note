import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {routes, redirects} from './routes';
import PrivateRoute from './utils/private_route/private-route';
import {connect} from 'react-redux';
import {successLogin} from './store/actions/auth';

function App(props) {

  //TODO: Load Token
  // React.useEffect(()=>{
  //   if (localStorage.getItem('token')) {
  //     props.loadToken(localStorage.getItem('token'));
  //   }
  // }, []);

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

    loadToken: (token) => dispatch(successLogin(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);