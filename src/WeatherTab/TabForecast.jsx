import React from "react";
import { Forecast12 } from "../TabForecast/Forecast12am";
import { Forecast15 } from "../TabForecast/Forecast15pm";
import { Forecast18 } from "../TabForecast/Forecast18pm";

function Forecast({ forecast }) {
  return (
    <div className="forecast-table forecast" id="tab-03">
      <div className="locations-header forecast-details ">
        <p className="text-locations">{forecast[0].name}</p>
      </div>
      <div className="table-items">
        <Forecast12 forecast={forecast[0]} />
        <Forecast15 forecast={forecast[1]} />
        <Forecast18 forecast={forecast[2]} />
      </div>
    </div>
  );
}

export { Forecast };