import React from 'react';
import { StyledError } from './styled';

export const ERROR_MESSAGES = {
  EMPTY_NAME: 'You didn\'t enter a name',
  SHORT_NAME: 'The name is too short',
  CONNECTION_ERROR: 'Connection error. Please reload the page',
  NOT_FOUND: 'The name is not found'
};

class Error extends React.Component {
  static showError(error, time, setErrorState) {
    setErrorState({error});
    error = '';
    setTimeout(() => setErrorState({error}), time);
  }

  render() {
    return (
      <StyledError>{this.props.message}</StyledError>
    );
  }
}

export default Error;
