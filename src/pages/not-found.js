import DefaultLayout from '../layout/default-layout';
import React from 'react';
import {Redirect} from 'react-router-dom';

function NotFound(props) {
  if (props.location.pathname !== '/not-found') {
    return <Redirect to="/not-found"/>;
  }

  return (
      <DefaultLayout>
        <h2>404</h2>
        <p>Page Not Found!</p>
      </DefaultLayout>
  );
}

export default NotFound;