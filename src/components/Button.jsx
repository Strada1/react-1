import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: false};
    this.handleClick = this.handleClick.bind(this);
  }
  async handleClick(e) {
    e.preventDefault();
    let firstName = document.getElementById('inputName').value;
    let result =  document.getElementById('resultField');
    if (firstName.length>2) {
      const serverUrl = 'https://api.genderize.io';
      const url = `${serverUrl}?name=${firstName}`;
      let response = await fetch(url);
      this.setState(prevState => ({
        response: !prevState.response
      }));
      let text = await response.text();
      let json = JSON.parse(text);
      result.textContent = `${firstName} is ${json.gender}`;
    } else {
      result.textContent = "Error, name should contain more than 2 letters";
    }
      
  }

  render() {
      return (
      <button onClick={this.handleClick} className={this.props.className}  id={this.props.id}>
        {this.state.response ? 'CHECKED': 'CHECK'}
        </button>
    );
  }
}

/*
async function onButtonPress() {
  //let userName = document.getElementById('inputName');
  //let firstName = userName.value;
  //let result =  document.getElementById('resultField');
  //const serverUrl = 'https://api.genderize.io';
  //const url = `${serverUrl}?name=${firstName}`;
  let response = await fetch(url);
  let text = await response.text();
  let json = JSON.parse(text);
  result.innerHTML = `${firstName} is ${json.gender}`;
}
*/

