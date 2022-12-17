import React from 'react';
import { StyledInput } from './styled';

const Input = ({onChange, ...props}) => {
  return (
    <StyledInput
      {...props}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
