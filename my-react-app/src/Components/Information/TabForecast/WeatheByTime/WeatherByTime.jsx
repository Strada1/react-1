import React from 'react';
import { format } from 'date-fns';
import './styleWeatherByTime.css';

function WeatherByTime(props) {
  const { data } = props;
  const {
    dt_txt: dtTxt,
    main: { temp, feels_like: feelsLike },
    weather,
  } = data;
  const { icon, main } = weather[0];
  const srcIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <div className="weatherByTime">
      <div className="weatherByTime__date">
        {format(new Date(dtTxt), 'd MMM')}
      </div>
      <div className="weatherByTime__time">
        {format(new Date(dtTxt), 'kk:mm')}
      </div>
      <div className="weatherByTime__temp">Temperature:{Math.round(temp)}°</div>
      <div className="weatherByTime__feels_like">
        Feels like:{Math.round(feelsLike)}°
      </div>
      <div className="weatherByTime__conditions__main">{main}</div>
      <img
        className="weatherByTime__conditions__img"
        alt="weather conditions"
        src={srcIcon}
      />
    </div>
  );
}

export default WeatherByTime;
