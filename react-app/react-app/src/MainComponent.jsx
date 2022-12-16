import React from 'react';
import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
import { ResultBlock } from './resultBlock';
import './App.css';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { res: '', name: '' };
  }

  handlerSubmit(e) {
    e.preventDefault();
  }

  inputHandler = (value) => {
    this.setState({ name: value });
  };
  SetResultHandler = (value) => {
    this.setState({ res: value });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>
          <TextInput
            InputClass="userInput"
            inputHandl={this.inputHandler}
          ></TextInput>
          <Button
            btnClass="btn"
            responseInput={this.state.name}
            setResult={this.SetResultHandler}
          ></Button>
          <ResultBlock res={this.state.res}></ResultBlock>
        </label>
      </form>
    );
  }
}
