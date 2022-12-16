import React from 'react'
import './button.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.buttonClassName}>Узнать</button>
    )
  }
}

export { Button }
