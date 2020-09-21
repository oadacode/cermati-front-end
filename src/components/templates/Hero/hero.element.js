import styled from 'styled-components';

export const ContainerHero = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 1300px;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props) => props.background});
  background-color: ${(props) => props.theme.palette.darkBlue};
  background-blend-mode: multiply;
`;

export const LogoIcon = styled.img`
  height: 42px;
  width: 42px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  height: 720px;
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: normal;
  text-align: center;
  color: ${(props) => props.theme.palette.colorWhite};
`;

export const SubHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.palette.colorWhite};
  margin: 0 0 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 29px;
  color: ${(props) => props.theme.palette.colorWhite};
  margin: 0 0 2.8rem;
  max-width: 500px;
  text-align: center;
`;

export const ButtonHero = styled.div``;
