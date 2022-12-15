import React from "react";
import "./input.css";

class Input extends React.Component {
  render() {
    return (
      <label>
      <input
        className="input"
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    </label>
        );
  }
}

  export { Input }
