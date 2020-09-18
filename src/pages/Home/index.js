import React from 'react';
import { Hero } from '../../components';
import dataHero from '../../constans/dataHero';

const Home = () => {
  return (
    <>
      <Hero {...dataHero} />
    </>
  );
};

export default Home;
