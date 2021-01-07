import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  if (props.private && !props.isAuthenticated) {
    return <Redirect to="/login"/>;
  } else {
    return (React.createElement(Route, {
      component: props.component,
      path: props.path,
      exact: props.exact,
    }));
  }

};
export default PrivateRoute;