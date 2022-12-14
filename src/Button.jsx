import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <button className="button">{this.props.textInButton}</button>
      </div>
    );
  }
}

export default Button;
