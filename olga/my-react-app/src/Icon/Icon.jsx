import React, { useContext } from "react";
import Context from "../Context";

function Icon() {
  const contextValue = useContext(Context);

  const iconSrc = `http://openweathermap.org/img/wn/${contextValue.result.icon}@4x.png`;
  return (
    <div className="weather__main--img">
      <img src={iconSrc} alt="" />
    </div>
  );
}
export default Icon;
