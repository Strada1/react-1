import React from "react";
import Town from "../Town/Town";
import Date from "../Date/Date";
import Time from "../Time/Time";
import Temperature from "../Temperature/Temperature";
import Feels from "../Feels/Feels";
import Rain from "../Rain/Rain";
function Forecast() {
  return (
    <div className="weather__item--main" id="details">
      <div className="weather__item-info">
        <Town />
        <ul className="weather__main--info">
          <Date />
          <Time />
          <Temperature />
          <Feels />
          <Rain />
        </ul>
      </div>
    </div>
  );
}
export default Forecast;
