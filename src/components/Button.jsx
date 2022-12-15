import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();    
    let firstName = document.getElementById('inputName').value;
    let result =  document.getElementById('resultField');
    result.textContent = firstName;
  }

  render() {
      return <button onClick={this.handleClick} className={this.props.className}  id={this.props.id}>GO!</button>
  }
}



