import React from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { StyledForm } from './styled';

class GenderizeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.name);
  }

  handleInputChange(value) {
    this.setState({
      name: value
    });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit} className={this.props.className}>
        <Input
          type="text"
          placeholder="Enter a name"
          value={this.state.name}
          change={this.handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </StyledForm>
    );
  }
}

export default GenderizeForm;

