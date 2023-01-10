import React from "react";
import { localstorageCity } from "../../../../js/consts";
import "./CityTitle.css";

export default function CityTitle({ namecity, setFavoriteCity, favoriteCity }) {

  function addFavoriteCity(value) {
    const result = new Set(favoriteCity);
    result.add(value)
    localStorage.setItem(localstorageCity, JSON.stringify(Array.from(result))); 
    setFavoriteCity(Array.from(result));
  }

  return (
    <div className="title__heart">
      <h1>{namecity}</h1>
      <button onClick={() => addFavoriteCity(namecity)} className="button__heart">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.54"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}
