import React from "react";

function Forecast18({ forecast }) {
  const src = `https://openweathermap.org/img/wn/${forecast.icon}@4x.png`;
  return (
    <div className="table-container">
      <div className="forecast-date">
        <p>{forecast.date}</p>
        <p>{forecast.time}</p>
      </div>
      <div className="forecast-weather">
        <div className="forecast-temperature">
          <p>Temperature: {forecast.temp}°</p>
          <p>Feels like: {forecast.feelLike}°</p>
        </div>
        <div className="weather-icon">
          <p className="rain">{forecast.weather}</p>
          <img src={src} className="forecast-icons"></img>
        </div>
      </div>
    </div>
  );
}

export { Forecast18 };