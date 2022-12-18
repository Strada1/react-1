import React from "react";

class Input extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        className="text-input"
        type={this.props.type}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export { Input };
