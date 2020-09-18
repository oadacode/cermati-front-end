import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  /* padding: 20px 20px 70px;

  @media screen and (max-width: 991px) {
    padding: 0 5%;
  } */
`;

const Container = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Container;
