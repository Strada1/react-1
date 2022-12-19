import React from "react";
import "./input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, name, placeholder, onChange} = this.props;
    return (
      <label>
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    );
  }
}

export { Input };
