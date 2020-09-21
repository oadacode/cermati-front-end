import React from 'react';
import { Helmet } from 'react-helmet';
import { Notification, Newsletter } from '../../components';
import { dataAuth, dataNews } from '../../constans';
import Home from '../Home';

function App() {
  return (
    <>
      <Helmet
        title={dataAuth.name}
        titleTemplate={`%s | Cermati.com Front-end Developer Entry Test`}>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
