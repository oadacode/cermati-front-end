import styled from 'styled-components';
import { breakpoints, theme } from '../../../lib/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;

  background-color: var(--color-grey);
  position: sticky;
  position: -webkit-sticky;
`;

export const Content = styled.div`
  display: flex;
  max-width: 720px;
  padding: 1rem;
  align-items: center;
  @media screen and (max-width: ${breakpoints.small}) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  max-width: 550px;
`;

export const Link = styled.a`
  color: ${() => theme.palette.blue};
`;
export const Button = styled.button`
  color: ${() => theme.palette.colorWhite};
  background: ${() => theme.palette.blue};

  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  height: 32px;
  max-width: 64px;

  @media screen and (max-width: ${breakpoints.small}) {
    margin-top: 1rem;
  }
`;
