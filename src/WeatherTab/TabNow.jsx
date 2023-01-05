import React from "react";

function WeatherNow({ city, addCity}) {
  const src = `https://openweathermap.org/img/wn/${city.icon}@4x.png`;
  return (
    <div className="forecast-now forecast" id="tab-01">
      <div className="degrees">{city.temp}°</div>
      <img
        className="cloud"
        alt="icon of cloud"
        width="129px"
        height="120px"
        src={src}
      />

      <div className="forecast-months">
        <p>{city.name}</p>
        <img onClick={addCity}
          src="\svg\heart.svg"
          alt="icon of heart"
          width="22px"
          height="22px"
          className="heart"
        />
      </div>
    </div>
  );
}

export { WeatherNow };
