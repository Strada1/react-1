import PropTypes from 'prop-types'
import React from 'react'
import './styleResult.css'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { resultTextContent } = this.props
    if (resultTextContent === null) {
      return null
    }
    return <div className="text-result">Gender:{resultTextContent}</div>
  }
}

Result.propTypes = {
  resultTextContent: PropTypes.string.isRequired,
}

export default Result
