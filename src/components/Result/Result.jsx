import React from 'react';
import './styleResult.css';
class Result extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='text-result'>Result:{this.props.resultTextContent}</div>
    )
  }
}

export default Result;