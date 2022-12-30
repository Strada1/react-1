import React from 'react';
import PropTypes from 'prop-types';

function ForecastItem(props) {
  const {
    dayWeather: { day, hours, temperature, feelsLike, imageText, imageSrc },
  } = props;
  return (
    <div className='forecast__box'>
      <div className='forecast__top'>
        <div className='forecast__date'>{day}</div>
        <div className='forecast__time'>{hours}</div>
      </div>

      <div className='forecast__bottom'>
        <div className='forecast__wrapper'>
          <div className='forecast__temperature'>
            Temperature: {temperature}
          </div>
          <div className='forecast__feels-like'>Feels like {feelsLike}</div>
        </div>

        <div className='forecast__wrapper'>
          <div className='forecast__image-text'>{imageText}</div>
          <img alt='rain icon' src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

ForecastItem.propTypes = {
  dayWeather: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ForecastItem;
