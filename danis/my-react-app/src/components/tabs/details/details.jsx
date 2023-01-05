import React from "react";

export default function Details( props ) {
   const {className, dataWeather} = props;
  return (
    <div className={`left__block-top ${className}`}>
      <h1>{dataWeather.name}</h1>
      <h2>Temperature: {dataWeather.temperature}</h2>
      <h2>Feels Like: {dataWeather.feelsLike}</h2>
      <h2>Weather: {dataWeather.weather}</h2>
      <h2>Sunrice: {dataWeather.sunrice}</h2>
      <h2>Sunset: {dataWeather.sunset}</h2>
    </div>
  );
}
