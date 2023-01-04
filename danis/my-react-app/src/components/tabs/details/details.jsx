import React from "react";

export default function Details( props ) {
   const {className, namecity, temperature, feelsLike, weather, sunrice, sunset} = props;
  return (
    <div className={`left__block-top ${className}`}>
      <h1>{namecity}</h1>
      <h2>Temperature: {temperature}</h2>
      <h2>Feels Like: {feelsLike}</h2>
      <h2>Weather: {weather}</h2>
      <h2>Sunrice: {sunrice}</h2>
      <h2>Sunset: {sunset}</h2>
    </div>
  );
}
