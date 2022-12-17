import React from 'react';
import Error, { ERROR_MESSAGES } from '../Error';
import { getGender } from '../../api/getData';
import {
  StyledContainer,
  GenderizeTitle,
  StyledForm,
  StyledResult
} from './styled';

const NAME_MIN_LENGTH = 2;
const SHOW_ERROR_TIME = 7000;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setResult = this.setResult.bind(this);
    this.setError = this.setError.bind(this);
  }

  setResult(result) {
    this.setState({result});
  }

  setError(error) {
    Error.showError(
      error,
      SHOW_ERROR_TIME,
      this.setState.bind(this)
    );

    /*this.setState({error});

    setTimeout(() => {
      this.setState({error: ''});
    }, SHOW_ERROR_TIME);*/
  }

  handleSubmit(name) {
    this.setError('');
    if (!name) {
      this.setError(ERROR_MESSAGES.EMPTY_NAME);
      return;
    }

    if (name.length < NAME_MIN_LENGTH) {
      this.setError(ERROR_MESSAGES.SHORT_NAME);
      return;
    }

    getGender(name, this.setResult, this.setError);
  }

  render() {
    const error = this.state.error;
    let result = this.state.result;
    result = result ? `${result?.name} is ${result?.gender}` : '';

    return (
      <StyledContainer>
        <GenderizeTitle>Genderize</GenderizeTitle>
        <StyledForm submit={this.handleSubmit} />
        {
          error
            ?
            <Error message={error}/>
            :
            <StyledResult>{result}</StyledResult>
        }
      </StyledContainer>
    );
  }
}

export default App;
