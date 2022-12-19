import React from 'react';
import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
import { Result } from './Result';
import '../App.css';


export class MainContainer extends React.Component {
    render() {
      return <div className={this.props.className}>
        <h5 className="mylogo">GENDERIZE</h5>
        <h6 className="mylogo">Click to check if  name is male/female</h6>
        <form className={this.props.className}>
        <TextInput type="text" value="Enter the name" className="inputElement" id="inputName" />
        <Button className="buttonElement" id="button" />
        <Result className="resultElement" id="resultField" name="Result will be here"/>
        </form>
        </div>
    }
  }