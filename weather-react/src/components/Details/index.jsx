import React from 'react';
import Weather from '../../API/Weather';
import { getTimeStringWithoutSeconds } from '../../modules/date';
import classes from './index.module.css';

const Details = ({info}) => {
  if (!info) {
    return null;
  }

  const weather = new Weather(info);

  return (
    <article className={classes.mainWrapper}>
      <h2 className={classes.title}>{weather.name}</h2>

      <div className={`${classes.informationItem} ${classes.temperature}`}>
        Temperature: {weather.temperature}&#176;
      </div>

      <div className={`${classes.informationItem} ${classes.feelsLike}`}>
        Feels like: {weather.feelsLike}&#176;
      </div>

      <div className={`${classes.informationItem} ${classes.weather}`}>
        Weather: {weather.description}
      </div>

      <div className={`${classes.informationItem} ${classes.sunrise}`}>
        Sunrise: {getTimeStringWithoutSeconds(weather.sunrise)}
      </div>

      <div className={`${classes.informationItem} ${classes.sunset}`}>
        Sunset: {getTimeStringWithoutSeconds(weather.sunset)}
      </div>
    </article>
  );
};

export default Details;
