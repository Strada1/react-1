import React from "react";
import { useContext } from "react";
import Context from "../Context";
function Feels() {
  const contextValue = useContext(Context);
  return (
    <li className="feels">
      Feels like: <span>{parseInt(contextValue.result.feelsLike)}</span>°
    </li>
  );
}
export default Feels;
