import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #040325;
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.colorWhite};
`;
