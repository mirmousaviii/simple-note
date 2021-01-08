import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const {isPrivate, isAuthenticated, ...rest} = props;

  if (props.isPrivate && !props.isAuthenticated) {
    return <Redirect to="/login"/>;
  }

  return (<Route {...rest} />);

};
export default PrivateRoute;