import React from 'react';
import './styleTextInput.css';

class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='check-name'>
          <input onChange={this.props.textchange} className='check-name__input' type="text"/>
      </div>
    )
  }
}

export default TextInput