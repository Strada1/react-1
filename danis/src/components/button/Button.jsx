import React from "react";
import './button.css'

export default class Button extends React.Component {
  constructor() {
    super();

    this.onClick = () => {
      console.log("I Work");
    };
  }

  render() {
    return <button className="button" onClick={this.onClick}>Узнай пол</button>;
  }
}
