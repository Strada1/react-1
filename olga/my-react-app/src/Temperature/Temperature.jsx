import React, { useContext } from "react";
import "../Temperature/Temperature.css";
import Context from "../Context";
function Temperature() {
  const contextValue = useContext(Context);
  return (
    <div className=" temperature">
      <span>{String(parseInt(contextValue.result.temp))}</span>°
    </div>
  );
}
export default Temperature;
