import React from 'react';
import PropTypes from 'prop-types';
import './ForecastList.sass';
import { v4 as uuidv4 } from 'uuid';
import ForecastItem from '../ForecastItem/ForecastItem';

function ForecastList(props) {
  const { cityWeather } = props;
  const content = cityWeather.map((item) => (
    <ForecastItem key={uuidv4()} dayWeather={item.timeDifference} />
  ));
  return (
    <div className='forecast'>
      <div className='forecast__city'>Kazan</div>
      {content}
    </div>
  );
}

ForecastList.propTypes = {
  cityWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ForecastList;
