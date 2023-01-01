import React from 'react';
import ForecastCard from '../ForecastCard';
import classes from './index.module.css';

const Forecast = ({info}) => {
  if (!info) {
    return null;
  }

  const forecast = info.list;
  if (!forecast || !forecast.length) {
    return null;
  }

  console.log(forecast);

  return (
    <article className={classes.mainWrapper}>
      <h2 className={classes.title}>Прогноз</h2>

      <div className={classes.forecastList}>
        {forecast.map((forecastItem) => (
          <ForecastCard key={forecastItem} info={forecastItem} />
        ))}
      </div>
    </article>
  );
};

export default Forecast;
