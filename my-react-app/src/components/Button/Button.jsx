import React from 'react';
import './styleButton.css';
class Button extends React.Component {
  render() {
    return (
      <div className="check-button">
        <button className="check-button__button">Click</button>
      </div>
    )
  }
}

export default Button