import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  if (props.private && !props.isAuthenticated) {
    return <Redirect to="/login"/>;
  } else {
    return (React.createElement(Route, {
      ...(props.component && {component: props.component}),
      ...(props.path && {path: props.path}),
      ...(props.exact && {exact: props.exact}),
    }));
  }

};
export default PrivateRoute;