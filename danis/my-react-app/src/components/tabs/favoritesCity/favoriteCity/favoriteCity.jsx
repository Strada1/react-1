import React from "react";
import "./favoriteCity.css";
import { localstorageCity } from "../../../../js/consts";

export default function FavoriteCity(props) {
  const { setFavoriteCity, favoriteCity, cityItem, setValue } = props;

  function deleteCity(value) {
    const result = new Set(favoriteCity);
    result.delete(value)
    localStorage.setItem(localstorageCity, JSON.stringify(Array.from(result))); 
    setFavoriteCity(Array.from(result));
  }

  return (
    <div>
      <div onClick={() => setValue(cityItem)} className="favorite__city">
        <h2>{cityItem}</h2>
        <button onClick={() => deleteCity(cityItem)}>X</button>
      </div>
    </div>
  );
}
