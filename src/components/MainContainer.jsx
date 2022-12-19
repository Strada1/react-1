import React from 'react';
import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
import { Result } from './Result';
import '../App.css';


export class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentState: false};
    this.handleForm = this.handleForm.bind(this);
  }

  async handleForm(e) {
    e.preventDefault();
    let firstName = document.getElementById('inputName').value;
    let result =  document.getElementById('resultField');
    let button = document.getElementById('button');
    if (firstName.length>2) {
      const serverUrl = 'https://api.genderize.io';
      const url = `${serverUrl}?name=${firstName}`;
      let response = await fetch(url);
      let text = await response.text();
      let json = JSON.parse(text);
      result.textContent = `${firstName} is ${json.gender}`;      
    } else {
      result.textContent = "Error, name should contain more than 2 letters";
    }
  }

  render() {
    return <div className={this.props.className}>
      <h5 className="mylogo">GENDERIZE</h5>
      <h6 className="mylogo">Click to check if  name is male/female</h6>
      <form className={this.props.className}>
        <TextInput onSubmit={this.handleForm} type="text" value="Enter the name" className="inputElement" id="inputName" />
        <Button onClick={this.handleForm} className="buttonElement" id="button"/>
        <Result className="resultElement" id="resultField" name="Result will be here"/>
      </form>
      </div>
  }
  }
