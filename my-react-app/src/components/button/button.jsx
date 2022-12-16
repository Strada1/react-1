import React from 'react';
import './button.css';

class Button extends React.Component {
  handleClick = () => {
    console.log('+++');
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className='gender-button btn btn-outline-success'
        type='button'
      >
        know
      </button>
    );
  }
}

export default Button;
