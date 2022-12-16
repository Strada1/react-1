import React from 'react';
import './result.css';

function Result(props) {
  const { result } = props;
  return <div className='gender-result'>result &#8987; {result}</div>;
}

export default Result;
