import React from "react";
import "./input.css";

export default class Input extends React.Component {
  render() {
    return (
      <input
        onChange={(event) => {
            this.props.updateName(event.target.value);
        }}
      />
    );
  }
}