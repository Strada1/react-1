import React from 'react';
import { StyledButton } from './styled';

class Button extends React.Component {
  render() {
    return(
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
