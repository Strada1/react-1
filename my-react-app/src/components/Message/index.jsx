import React from 'react';
import { StyledMessage } from './styled';

const Message = ({text}) => {
  let name = text;

  return (
    <>
      {
        text &&
        <StyledMessage $isFavourite={isFavourite}>Привет, {name}!</StyledMessage>
      }
    </>
  );
};

export default Message;
