import styled from 'styled-components';
import { breakpoints } from '../../../lib/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.7rem;
  padding: 5rem 0;

  @media screen and (max-width: ${breakpoints.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${breakpoints.small}) and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
