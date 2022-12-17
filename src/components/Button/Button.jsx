import React from 'react';
import './styleButton.css';
class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="check-button">
        <button disabled={this.props.status<=2 ? true : false} onClick={this.props.findoutgender} className="check-button__button" type='button'>Click</button>
      </div>
    )
  }
}

export default Button