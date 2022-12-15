import React from 'react';
import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
import { Result } from './Result';
import './App.css';


export class MainContainer extends React.Component {
    render() {
      return <div className={this.props.className}>
        {this.props.name}
        <form className={this.props.className}>
        <TextInput type="text" value="Enter the name" className="inputElement" id="inputName" />
        <Button className="buttonElement" id="button" />
        <Result className="resultElement" id="resultField" name="Result will be here"/>
        </form>
        </div>
    }
  }