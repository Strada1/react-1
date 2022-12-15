import React from "react";

export default class Button extends React.Component {

  constructor() {
    super();

    this.onClick = () => {
      console.log('I Work');
    }
  }

  render() {
  return <button onClick={this.onClick} >Узнай пол</button>;
  }
}