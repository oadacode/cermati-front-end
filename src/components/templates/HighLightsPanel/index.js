import React from 'react';
import {
  ContainerPanel,
  DescriptionsPanel,
  Heading,
  Headline,
} from './panel.element';

const HighLightsPanel = ({ children, title, descriptions }) => {
  return (
    <ContainerPanel>
      <Headline>
        <Heading>{title}</Heading>
        <DescriptionsPanel>{descriptions}</DescriptionsPanel>
      </Headline>
      {children}
    </ContainerPanel>
  );
};

export default HighLightsPanel;
