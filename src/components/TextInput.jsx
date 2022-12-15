import React from 'react';

export class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();    
    let firstName = document.getElementById('inputName').value;
    let result =  document.getElementById('resultField');
    result.textContent = firstName;
  }
  render() {
    return <input onSubmit={this.handleSubmit} className={this.props.className} type={this.props.type} id={this.props.id} placeholder={this.props.value}/>
  }
}