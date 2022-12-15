import React from "react";
import "./button.css";

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const value = document.querySelector('.input').value;
    console.log(value)
  }
  render() {
    return (
          <button onClick={this.handleClick} className="button" type="submit">
            Click me
          </button>
        );
  }
}


export { Button }