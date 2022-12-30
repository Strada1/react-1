import React from 'react';
import './Details.sass';
import PropTypes from 'prop-types';

function Details(props) {
  const {
    cityWeather: { name, temperature, feelsLike, weather, sunrise, sunset },
  } = props;
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

Details.propTypes = {
  cityWeather: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    temperature: PropTypes.string,
    feelsLike: PropTypes.number,
    weather: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Details;
