import React from 'react';
import './warning.css';

function WarningBanner(props) {
  const { lengthText } = props;
  if (lengthText > 3) {
    return null;
  }
  if (lengthText === 0) {
    return null;
  }
  return <div className='warning'>Слишком короткое сообщение</div>;
}
export default WarningBanner;
