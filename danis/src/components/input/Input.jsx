import React from "react";
import './input.css'

export default class Input extends React.Component {
  render() {
    function showInput(event) {
      console.log(event.target.value);
    }
    return <input className="input" onChange={showInput} type="text" />;
  }
}