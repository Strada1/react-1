import React from 'react';
import { StyledError } from './styled';

const Error = ({message}) => {
  const isError = message ? true : false;

  return (
    <StyledError $isError={isError}>
      {message}
    </StyledError>
  );
};

export default Error;
