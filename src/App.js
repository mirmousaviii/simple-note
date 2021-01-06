import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import routes from './routes';

function App(props) {

  return (
      <ConnectedRouter history={props.history}>
        <Switch>
          {routes.map((item, index) => (
                  <Route {...item} key={index}/>
              ),
          )}
        </Switch>
      </ConnectedRouter>
  );
};

export default App;
