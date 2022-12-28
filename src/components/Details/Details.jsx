import React from 'react';
import './Details.sass';

function Details() {
  return (
    <div className='details'>
      <div className='details__city' />
      <div className='details__information'>
        <div className='details__temperature'>
          Temperature: <span />
        </div>
        <div className='details__feels-like'>
          Feels like: <span />
        </div>
        <div className='details__weather'>
          Weather: <span />
        </div>
        <div className='details__sunrise'>
          Sunrise: <span> 03:21</span>
        </div>
        <div className='details__sunset'>
          Sunset: <span> 18:54</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
