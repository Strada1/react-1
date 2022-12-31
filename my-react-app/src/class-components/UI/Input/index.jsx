import React from 'react';
import { StyledInput } from './styled';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.change(e.target.value);
  }

  render() {
    return (
      <StyledInput onChange={this.handleChange} {...this.props} />
    );
  }
}

export default Input;
