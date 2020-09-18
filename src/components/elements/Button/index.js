import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${(props) => props.theme.palette.colorWhite};
  padding: 16px 32px;
  font-size: 1.527rem;
  width: max-content;
  align-self: center;
  cursor: pointer;
  font-weight: 400;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid ${(props) => props.theme.palette.colorWhite};
  outline: none;

  &:hover {
    color: ${(props) => props.theme.palette.darkBlue};
    border: 2px solid ${(props) => props.theme.palette.colorWhite};
    background-color: ${(props) => props.theme.palette.colorWhite};
  }
`;

const Button = ({ children, link, onClick, target }) => {
  if (link) {
    return (
      <a href={link} target={target} rel="nofollow noopener noreferrer">
        <StyledButton {...{ onClick }}>{children}</StyledButton>
      </a>
    );
  }
  return <StyledButton>{children}</StyledButton>;
};

// Button.defaultProps = {
//   target: '_blank',
// };

export default Button;
