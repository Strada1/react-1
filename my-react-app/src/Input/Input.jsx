import React from "react";
import "./input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input
          className="input"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export { Input };
