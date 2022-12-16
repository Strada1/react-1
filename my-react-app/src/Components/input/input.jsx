import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className={this.props.textInputClassName} type='text'/>
    )
  }
}

export { TextInput }
