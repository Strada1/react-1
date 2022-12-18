import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, className, onChange } = this.props;
    return (
      <div>
        <input type={type} className={className} onChange={onChange} />
      </div>
    );
  }
}

export default Input;
