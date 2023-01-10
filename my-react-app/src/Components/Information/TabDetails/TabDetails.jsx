import React from 'react';
import { format } from 'date-fns';
import timeLocal from '../../../additional/timeLocal';
import './styleTabDetails.css';

function TabDetails(props) {
  const { cityWeatherInfo } = props;
  const {
    name,
    main: { temp, feels_like: tempFeels },
    weather,
    sys: { sunrise, sunset },
    timezone,
  } = cityWeatherInfo;
  const { main } = weather[0];
  const localSunrise = timeLocal(sunrise, timezone);
  const localSunset = timeLocal(sunset, timezone);
  return (
    <div className="tabDetails">
      <div className="tabDetails__city">{name}</div>
      <div className="tabDetails__block-info">
        <div className="tabDetails__element">
          Temperature:{Math.round(temp)}°
        </div>
        <div className="tabDetails__element">
          Feels like:{Math.round(tempFeels)}°
        </div>
        <div className="tabDetails__element">Weather:{main}</div>
        <div className="tabDetails__element">
          Sunrise: {format(new Date(localSunrise), 'HH:mm')}
        </div>
        <div className="tabDetails__element">
          Sunset: {format(new Date(localSunset), 'HH:mm')}
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
