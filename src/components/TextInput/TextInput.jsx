import React from 'react';
import './styleTextInput.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <input onChange={this.props.textchange} className='check-name__input' type="text"/>
    )
  }
}

export default TextInput