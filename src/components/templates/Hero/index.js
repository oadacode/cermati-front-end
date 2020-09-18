import React from 'react';
import Button from '../../elements/Button';
import {
  ContainerHero,
  ContentWrapper,
  Heading,
  LogoIcon,
  Paragraph,
  SubHeading,
} from './hero.element';

const Hero = ({
  heading,
  subHeading,
  descriptions,
  Icon,
  background,
  sourceLink,
}) => {
  return (
    <ContainerHero background={background}>
      <LogoIcon src={Icon} />
      <ContentWrapper>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
        <Paragraph>{descriptions}</Paragraph>
        <Button link={sourceLink}>Let's make contact</Button>
      </ContentWrapper>
    </ContainerHero>
  );
};

export default Hero;
