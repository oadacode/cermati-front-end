import React from 'react';
import HighLightCard from '../HighLightCard';
import { Container } from './highlights.element';

const HighgLights = ({ dataCard = [] }) => {
  return (
    <Container>
      {dataCard.map((data, i) => (
        <HighLightCard {...data} key={i} />
      ))}
    </Container>
  );
};

export default HighgLights;
