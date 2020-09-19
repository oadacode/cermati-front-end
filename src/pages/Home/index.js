import React from 'react';
import { Hero, HighLightsPanel } from '../../components';
import HighgLights from '../../components/modules/HighLights';
import Footer from '../../components/templates/Footer';
import { dataAuth, dataHero, dataHighlight, dataPanel } from '../../constans';

const Home = () => {
  return (
    <>
      <Hero {...dataHero} />
      <HighLightsPanel {...dataPanel}>
        <HighgLights dataCard={dataHighlight} />
      </HighLightsPanel>
      <Footer {...dataAuth} />
    </>
  );
};

export default Home;
