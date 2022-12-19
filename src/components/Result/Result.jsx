import React from 'react';
import './styleResult.css';
class Result extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    if (this.props.resultTextContent === null) {
      return null
    }
    return (
      <div className='text-result'>Gender:{this.props.resultTextContent}</div>
    )
  }
}

export default Result;