import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange(e) {
    // e.preventDefault();
    console.log(e.target.value);
    this.setState = { value: e.target.value };
  }
  render() {
    return (
      <input onChange={(e) => this.onChange(e)} className="text" type="text" />
    );
  }
}

export { Input };
