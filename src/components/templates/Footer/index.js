import React from 'react';
import { FooterContainer, Paragraph } from './footer.elemet';

const Footer = ({ name }) => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Paragraph>
        &copy; {year} {name}. All rights reversed.
      </Paragraph>
    </FooterContainer>
  );
};

export default Footer;
