import React from 'react';
import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
import './App.css';

export class MainComponent extends React.Component {
  render() {
    return (
      <form>
        <label>
          <TextInput InputClass="userInput"></TextInput>
          <Button btnClass="btn"></Button>
        </label>
      </form>
    );
  }
}
