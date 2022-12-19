import React from 'react'
import './styleTextInput.css'
import PropTypes from 'prop-types'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { textchange } = this.props
    return (
      <input onChange={textchange} className="check-name__input" type="text" />
    )
  }
}

TextInput.propTypes = {
  textchange: PropTypes.func.isRequired,
}

export default TextInput
