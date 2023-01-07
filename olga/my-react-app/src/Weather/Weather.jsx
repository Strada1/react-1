import React from "react";
import { useContext } from "react";
import Context from "../Context";
function Weather() {
  const contextValue = useContext(Context);
  return (
    <li className="weather">
      Weather: <span>{contextValue.result.weather}</span>
    </li>
  );
}
export default Weather;
