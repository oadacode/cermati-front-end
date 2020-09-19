import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 480px;
  padding: 2rem;
  border: 2px solid #d7d2d2;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  height: 42px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.darkGrey};
`;

export const Title = styled.h3`
  height: 42px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.palette.darkGrey};
`;

export const CardContent = styled.p`
  font-size: 1.8rem;
  color: ${(props) => props.theme.palette.darkGrey};
`;
