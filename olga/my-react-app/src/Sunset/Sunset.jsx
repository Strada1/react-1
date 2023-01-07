import React from "react";
import { useContext } from "react";
import Context from "../Context";
function Sunset() {
  const contextValue = useContext(Context);
  return (
    <li className="sunset">
      Sunset: <span>{contextValue.sunsetDate(contextValue.result.sunset)}</span>
    </li>
  );
}
export default Sunset;
