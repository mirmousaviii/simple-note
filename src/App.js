import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {routes, redirects} from './routes';

function App(props) {

  return (
      <ConnectedRouter history={props.history}>
        <Switch>
          {routes.map((item, index) => (
                  <Route {...item} key={index}/>
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
