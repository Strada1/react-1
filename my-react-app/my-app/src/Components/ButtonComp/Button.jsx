import React, { Component } from "react";
import "./btnStyles.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick(event) {
    event.preventDefault();
    console.log("Hello bitches");
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handlerClick}>
        {this.props.text}
      </button>
    );
  }
}
