import React from "react";
import Temperature from "../Temperature/Temperature";
import Town from "../Town/Town";
import Feels from "../Feels/Feels";
import Weather from "../Weather/Weather";
import Sunrise from "../Sunrise/Sunrise";
import Sunset from "../Sunset/Sunset";
function Details() {
  return (
    <div className="weather__item--main" id="details">
      <div className="weather__item-info">
        <Town />
        <ul className="weather__main--info">
          <Temperature />
          <Feels />
          <Weather />
          <Sunrise />
          <Sunset />
        </ul>
      </div>
    </div>
  );
}
export default Details;
