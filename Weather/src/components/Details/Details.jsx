import React from 'react';

function Details({ city, temp, feels, description, timezone, timeSunrise, timeSunset }) {
  const deg = Math.floor(temp - 273.15) + '°';
  const degFeels = Math.floor(feels - 273.15) + '°';

  const dateNow = new Date(Date.now());
  const sunrise = new Date(
    timeSunrise * 1000 + dateNow.getTimezoneOffset() * 60000 + timezone * 1000,
  ).toLocaleTimeString();
  const sunset = new Date(
    timeSunset * 1000 + dateNow.getTimezoneOffset() * 60000 + timezone * 1000,
  ).toLocaleTimeString();

  return (
    <div id="tab_02" className="tabsBlock">
      <h1>{city}</h1>
      <ul className="details">
        <li className="detail">Temperature: {deg}</li>
        <li className="detail">Feels like: {degFeels}</li>
        <li className="detail">Weather: {description}</li>
        <li className="detail">Sunrise: {sunrise}</li>
        <li className="detail">Sunset: {sunset}</li>
      </ul>
    </div>
  );
}

export default Details;
