import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, className, onClick, children } = this.props;
    return (
      <div>
        <button type={type} className={className} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
}

export default Button;
