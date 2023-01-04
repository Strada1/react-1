import React from "react";
import "./favorites.css";
import FavoriteCity from "./favoriteCity/favoriteCity";

export default function Favorites(props) {
  const items = JSON.parse(localStorage.getItem("favoriteCity"));

  const { setFavoriteCity, favoriteCity, setValue } = props;

  return (
    <div className="favorits-container">
      <div className="favorits-title">
        <h1>Added Locations:</h1>
      </div>
      <div className="favorits-city">
        {items.map((item) => (
          <FavoriteCity
            key = {item}
            cityItem={item}
            setFavoriteCity={setFavoriteCity}
            favoriteCity={favoriteCity}
            setValue = {setValue}
          />
        ))}
      </div>
    </div>
  );
}
