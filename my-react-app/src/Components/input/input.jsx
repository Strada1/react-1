import React from 'react'
import ReactDOM from 'react-dom/client'
import './input.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input value={this.props.valueInput} onChange={this.props.onChange} className={this.props.textInputClassName}  type='text' placeholder='Введите Имя'/>
    )
  }
}

export { TextInput }
