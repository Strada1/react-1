import React from "react";

export default class Input extends React.Component {
  render() {
    function showInput(event) {
      console.log(event.target.value);
    }
    return <input onChange={showInput} type="text" />;
  }
}