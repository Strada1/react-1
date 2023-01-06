import React, { useContext } from 'react';
import './Details.sass';
import nowContext from '../../hooks/context';

function Details() {
  const context = useContext(nowContext);
  const { name, temperature, feelsLike, weather, sunrise, sunset } = context;
  return (
    <div className='details'>
      <div className='details__city'>{name} </div>
      <div className='details__information'>
        <div className='details__temperature'>Temperature: {temperature}</div>
        <div className='details__feels-like'>Feels like: {feelsLike}</div>
        <div className='details__weather'>Weather: {weather}</div>
        <div className='details__sunrise'>Sunrise: {sunrise}</div>
        <div className='details__sunset'>Sunset: {sunset}</div>
      </div>
    </div>
  );
}

export default Details;
