import React, { useContext } from "react";
import Context from "../Context";
import "../Town/Town.css";
function Town() {
  const contextValue = useContext(Context);
  return <div className="weather__item--name">{contextValue.result.city}</div>;
}
export default Town;
