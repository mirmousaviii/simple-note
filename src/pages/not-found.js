import DefaultLayout from '../layout/default-layout';
import React from 'react';

function NotFound() {
  return (
      <DefaultLayout>
        <h2>404</h2>
        <p>Page Not Found!</p>
      </DefaultLayout>
  );
}

export default NotFound;