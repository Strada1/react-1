import React, { Component } from "react";
import "./H1.css";

export default class H1 extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
