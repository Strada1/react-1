import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <button className="button" type="submit">
        Click me
      </button>
    );
  }
}

export { Button };
