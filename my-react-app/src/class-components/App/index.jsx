import React from 'react';
import {
  StyledContainer,
  GenderizeTitle,
  StyledForm,
  StyledResult
} from './styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.setState({
      result: data
    });
  }

  render() {
    return (
      <StyledContainer>
        <GenderizeTitle>Genderize</GenderizeTitle>
        <StyledForm submit={this.handleSubmit} />
        <StyledResult>{this.state.result}</StyledResult>
      </StyledContainer>
    );
  }
}

export default App;
