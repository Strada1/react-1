import React from "react";

function Details({city}) {
    return(
        <div className="forecast-details forecast" id="tab-02">
        <div className="locations-header forecast-details ">
            <p className="text-locations">{city.name}</p>
        </div>
        <ul className="details-items">
            <li className="temp">Temperature: {city.temp}°</li>
            <li className="feel-like">Fells like: {city.feelLike}°</li>
            <li className="weatherLi">Weather: {city.weather}</li>
            <li className="sunrise">Sunrise: {city.sunrise}</li>
            <li className="sunset">Sunset: {city.sunset}</li>

        </ul>
    </div>
    )
}

export {Details}