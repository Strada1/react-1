import React from 'react'
import PropTypes from 'prop-types'
import './styleButton.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { inputValue } = this.props
    return (
      <button
        disabled={inputValue.length <= 2}
        className="check-button__button"
        type="submit"
      >
        Click
      </button>
    )
  }
}

Button.propTypes = {
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

export default Button
