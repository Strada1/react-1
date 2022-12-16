import React from 'react'
import './button.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.buttonClassName}>Submit</button>
    )
  }
}

export { Button }
