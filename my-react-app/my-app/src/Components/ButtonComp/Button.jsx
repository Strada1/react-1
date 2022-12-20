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
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.text}
      </button>
    );
  }
}
