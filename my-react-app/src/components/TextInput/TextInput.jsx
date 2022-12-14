import React from 'react';
import './styleTextInput.css';
class TextInput extends React.Component {
  render() {
    return (
      <div className='check-name'>
        <input className='check-name__input' type="text" />
      </div>
    )
  }
}

export default TextInput