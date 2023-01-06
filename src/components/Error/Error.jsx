import React from 'react';
import error from '../../resources/img/error.jpg';
import './Error.sass';

function Error() {
  return (
    <div className='error'>
      <img src={error} alt='error' />
    </div>
  );
}

export default Error;
