import React from 'react';

export class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();    
    let firstName = document.getElementById('inputName').value;
    let result =  document.getElementById('resultField');
    if (firstName.length>2){
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
    <input onSubmit={this.handleSubmit} className={this.props.className} type={this.props.type} id={this.props.id} placeholder={this.props.value}/>
  );
  }
}