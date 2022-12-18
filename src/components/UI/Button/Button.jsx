import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button type={this.props.type} className={this.props.name}>
        <span> Нажми </span>
      </button>
    );
  }
}

export { Button };
