import React, { useState, useEffect } from "react";
import "./search.css";
import {
  serverUrl,
  apiKey,
  forecastURL,
  localstorageCity,
} from "../../js/consts";
import { getData } from "../../js/getData";
import { getForecast } from "../../js/getForecast";

export default function Search({ setdataWeather, setFuture }) {
  const [nameCity, setnameCity] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(localstorageCity));

    if (items[0]) {
      getFirstData(items[0]);
    }
  }, []);

  function change(e) {
    setnameCity(e.target.value);
  }

  async function prevent(e) {
    e.preventDefault();
    getFirstData(nameCity);
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
    <form onSubmit={prevent} action="">
      <input
        className="search"
        onChange={change}
        placeholder="Aktobe"
        type="text"
      />
    </form>
  );
}
