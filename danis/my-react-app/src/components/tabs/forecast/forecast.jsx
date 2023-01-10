import React, { useContext } from "react";
import "./forecst.css";
import { WeatherContext } from "../../../js/context";

export default function Forecast({ className, cityItem }) {
  const { future } = useContext(WeatherContext);

  if (!future) return;

  const result = future.map((item) => (
    <div key={item.id} className="future__block">
      <div className="only__data">
        <div>{item.day}</div>
        <div> {item.hours}</div>
      </div>
      <div className="container">
        <div className="just__block">
          <div>Temperature: {item.temperature}</div>
          <div>Feels like: {item.feelsLike}</div>
        </div>
        <div className="image__weather-block">
          <div>{item.weather}</div>
          <img src={item.image} alt="" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className={`left__block-top ${className}`}>
      <h1>{cityItem}</h1>
      <div className="container-fluid">{result}</div>
    </div>
  );
}
