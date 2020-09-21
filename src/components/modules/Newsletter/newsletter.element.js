import styled from 'styled-components';
import { breakpoints, theme } from '../../../lib/theme';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  max-width: 640px;
  padding: 3rem;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 123, 193, 0.9);
`;
export const IconClose = styled.div`
  position: absolute;
  font-size: 1.6rem;
  align-self: flex-end;
  color: var(--color-white);
  cursor: pointer;
  top: 1rem;
  right: 1rem;
`;

export const HeadingNews = styled.h2`
  font-size: 2.3rem;
  color: var(--color-white);
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  color: var(--color-white);
`;

export const FormWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 3rem;
  padding: 0.3rem 1rem;
  min-width: 80%;
  @media screen and (max-width: ${breakpoints.small}) {
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  font-weight: bold;
  padding: 0.3rem 1rem;
  margin-left: 1rem;
  border: none;
  height: 3rem;

  color: var(--color-white);
  background-color: ${() => theme.palette.orange};
  @media screen and (max-width: ${breakpoints.small}) {
    margin-left: 0;
  }
`;
