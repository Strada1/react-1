/* eslint-disable */ 
import React from 'react';
import './button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type='submit' className={this.props.buttonClassName}>Узнать</button>
    );
  }
}

export { Button };
