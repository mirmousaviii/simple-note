import DefaultLayout from '../layout/default-layout';
import React from 'react';

function Home() {

  return (
      <DefaultLayout>
        <h2>Welcome to note manager</h2>
        <p>This is a simple note manager.</p>
      </DefaultLayout>
  );
}

export default Home;