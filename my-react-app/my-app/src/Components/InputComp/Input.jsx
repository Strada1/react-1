import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        placeholder={this.props.placeholder}
      />
    );
  }
}
