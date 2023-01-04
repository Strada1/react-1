import React, { useState, useEffect } from "react";
import Now from "./now";
import Details from "./details";
import Forecast from "./forecast";
import {
  serverUrl,
  apiKey,
  urlImage,
  beatifulImage,
  localstorageCity,
  forecastURL,
} from "../../js/consts";
import "./tabs.css";
import { convetData } from "../../js/covertData";
import Favorites from "./favoritesCity";
import { getData } from "../../js/getData";
import { getForecast } from "../../js/getForecast";

export default function Tabs({ nameCity, display, setValue }) {
  const [temperature, setTemperature] = useState("");
  const [image, setImage] = useState("");
  const [feelsLike, setfeelsLike] = useState("");
  const [weather, setWeather] = useState("");
  const [sunrice, setSunrice] = useState("");
  const [sunset, setSunset] = useState("");
  const [favoriteCity, setFavoriteCity] = useState();
  const [future, setFuture] = useState([]);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(localstorageCity));

    if (items) {
      setFavoriteCity(items);
    }
  }, []);

  const urls = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;
  const urlsForecast = `${forecastURL}?q=${nameCity}&appid=${apiKey}&units=metric`;

  const data = getData(urls);
  data.then((result) => {
    setfeelsLike(result.feelsLike);
    setTemperature(result.temperature);
    setImage(result.image);
    setWeather(result.weather);
    setSunrice(result.sunrice);
    setSunset(result.sunset);
  });

  const forecast = getForecast(urlsForecast);
  forecast.then((result) => {
    setFuture(result);
  });

  return (
    <div className="tabs">
      <Now
        className={display === "tab-1" ? "tabs-active" : "tab"}
        namecity={nameCity}
        temperature={temperature}
        image={image}
        setFavoriteCity={setFavoriteCity}
        favoriteCity={favoriteCity}
      />
      <Details
        className={display === "tab-2" ? "tabs-active" : "tab"}
        namecity={nameCity}
        temperature={temperature}
        feelsLike={feelsLike}
        weather={weather}
        sunrice={sunrice}
        sunset={sunset}
      />
      <Forecast
      className={display === "tab-3" ? "tabs-active" : "tab"}
      namecity={nameCity}
      future = {future}
      />
      <div className="favorites__city">
        <Favorites
          namecity={nameCity}
          setFavoriteCity={setFavoriteCity}
          favoriteCity={favoriteCity}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
