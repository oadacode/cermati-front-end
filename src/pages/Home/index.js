import React from 'react';
import { Hero, HighLightsPanel } from '../../components';
import HighgLights from '../../components/modules/HighLights';
import { dataHero, dataHighlight, dataPanel } from '../../constans';

const Home = () => {
  return (
    <>
      <Hero {...dataHero} />
      <HighLightsPanel {...dataPanel}>
        <HighgLights dataCard={dataHighlight} />
      </HighLightsPanel>
    </>
  );
};

export default Home;
