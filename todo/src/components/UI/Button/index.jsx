import React from 'react';
import { StyledButton } from './styled';

export const ACTIONS = {
  ADD: 'add',
  DELETE: 'delete'
};

const Button = ({ children, className, ...props }) => {
  return (
    <StyledButton {...props} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
