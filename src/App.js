import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {routes, redirects} from './routes';
import PrivateRoute from './utils/private_route/private-route';

function App(props) {

  return (
      <ConnectedRouter history={props.history}>
        <Switch>
          {routes.map((item, index) => (
                  <PrivateRoute {...item} isAuthenticated={false} key={index}/>
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

export default App;
