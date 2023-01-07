import React from "react";
import Temperature from "../Temperature/Temperature";
import Town from "../Town/Town";
import Favorites from "../Favorites/Favorites";
import "../Now/Now.css";
function Now() {
  return (
    <div className="weather__item--main active" id="now">
      <Temperature />
      <div className="weather__item-town">
        <Town />
        <Favorites />
      </div>
    </div>
  );
}
export default Now;
