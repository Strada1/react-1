import React from 'react';
import './styleButton.css';
class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <button disabled={this.props.length<=2 ? true : false} className="check-button__button" type='submit'>Click</button>
    )
  }
}

export default Button