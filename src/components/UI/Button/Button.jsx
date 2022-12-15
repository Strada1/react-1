import React from "react";

class Button extends React.Component {
  onClick() {
    console.log("Нажата кнопка");
  }
  render() {
    return (
      <button onClick={() => this.onClick()} className="button">
        <span>{this.props.textInButton}</span>
      </button>
    );
  }
}

export { Button };
