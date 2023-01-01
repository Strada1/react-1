import React from 'react';
import Weather from '../../API/Weather';
import { getTimeStringWithoutSeconds, getDateString } from '../../modules/date';
import classes from './index.module.css';

const ForecastCard = ({info}) => {
  if (!info) {
    return null;
  }

  const weather = new Weather(info);

  return (
    <div className={classes.card}>
      <span className={classes.date}>{getDateString(weather.date)}</span>
      <span className={classes.time}>{getTimeStringWithoutSeconds(weather.date)}</span>
      <div className={classes.temperature}>
        <p className={classes.temperatureItem}>
          Temperature: {weather.temperature}&#176;
        </p>
        <p className={classes.temperatureItem}>
          Feels like: {weather.feelsLike}&#176;
        </p>
      </div>
      <div className={classes.weather}>
        <span className={classes.weatherTitle}>{weather.title}</span>
        <img
          className={classes.weatherPicture}
          src={weather.iconSource}
          alt="{weather.description}"
          width="60"
          height="60"
        />
      </div>
    </div>
  );
};

export default ForecastCard;
