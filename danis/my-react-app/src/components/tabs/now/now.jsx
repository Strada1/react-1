import React from "react";
import Temperature from "./temperature";
import CityTitle from "./CityTitle";
import Imgage from "./image";
import "./now.css";

export default function Now(props) {
  const {
    namecity,
    temperature,
    image,
    className,
    setFavoriteCity,
    favoriteCity,
  } = props;

  return (
    <div className={`left__block-top ${className}`}>
      <Temperature temperature={temperature} />
      <Imgage image={image} />
      <CityTitle
        namecity={namecity}
        setFavoriteCity={setFavoriteCity}
        favoriteCity={favoriteCity}
      />
    </div>
  );
}
