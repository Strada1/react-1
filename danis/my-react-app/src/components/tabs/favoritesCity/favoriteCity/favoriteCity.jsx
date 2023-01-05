import React from "react";
import "./favoriteCity.css";
import { localstorageCity, serverUrl, forecastURL, apiKey } from "../../../../js/consts";
import { getData } from "../../../../js/getData";
import { getForecast } from "../../../../js/getForecast";

export default function FavoriteCity(props) {
  const { setFavoriteCity, favoriteCity, cityItem, setdataWeather, setFuture } = props;

  function deleteCity(value) {
    const result = new Set(favoriteCity);
    result.delete(value)
    localStorage.setItem(localstorageCity, JSON.stringify(Array.from(result))); 
    setFavoriteCity(Array.from(result));
  }

  function changeCity() {
    getFirstData(cityItem)
  }

  async function getFirstData(city) {
    const urls = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    const urlsForecast = `${forecastURL}?q=${city}&cnt=3&appid=${apiKey}&units=metric`;

    const data = await getData(urls);
    setdataWeather(data);

    const forecast = await getForecast(urlsForecast);
    setFuture(forecast);
  }
  

  return (
    <div>
      <div onClick={() => changeCity()} className="favorite__city">
        <h2>{cityItem}</h2>
        <button onClick={() => deleteCity(cityItem)}>X</button>
      </div>
    </div>
  );
}
