import React from 'react';
import WeatherByTime from './WeatheByTime/WeatherByTime';
import './styleTabForecast.css';

function TabForecast(props) {
  const { forecast } = props;

  const {
    list,
    city: { name },
  } = forecast;

  const displayWeatherDataByTime = list.map((obj) => (
    <WeatherByTime data={obj} key={obj.dt} />
  ));
  return (
    <div className="tabForecast">
      <div className="tabForecast__city-name">{name}</div>
      <div className="tabForecast__list-by-time">
        {displayWeatherDataByTime}
      </div>
    </div>
  );
}

export default TabForecast;
