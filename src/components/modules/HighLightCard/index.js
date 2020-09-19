import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CardContainer,
  CardHeader,
  Title,
  CardContent,
  IconWrapper,
} from './card.element';

const HiglightCard = ({ title, icon, content }) => {
  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <IconWrapper>
          <FontAwesomeIcon icon={icon} />
        </IconWrapper>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default HiglightCard;
