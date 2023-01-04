import React from "react";
import Now from "./now";
import Details from "./details";
import Forecast from "./forecast";
import "./tabs.css";
import Favorites from "./favoritesCity";

export default function Tabs(props) {
  const {
    nameCity,
    display,
    setValue,
    temperature,
    image,
    setFavoriteCity,
    favoriteCity,
    feelsLike,
    weather,
    sunrice,
    sunset,
    future,
  } = props;

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
        future={future}
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
