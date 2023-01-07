import React from "react";
import Icon from "../Icon/Icon";
import Weather from "../Weather/Weather";
function Rain() {

  return (
    <div className="weather__main--condition">
      <span>
        <Weather />
      </span>
      <Icon />
    </div>
  );
}
export default Rain;
