import React from "react";
import { useContext } from "react";
import Context from "../Context";
function Sunrise() {
  const contextValue = useContext(Context);

  return (
    <li className="sunrise">
      Sunrise: <span>{contextValue.sunsetDate(contextValue.result.sunrise)}</span>
    </li>
  );
}
export default Sunrise;
