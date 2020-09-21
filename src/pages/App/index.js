import React from 'react';
import { Notification, Newsletter } from '../../components';
import dataNews from '../../constans/dataNews';
import Home from '../Home';

function App() {
  return (
    <>
      <header>
        <Notification />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Newsletter {...dataNews} />
      </footer>
    </>
  );
}

export default App;
