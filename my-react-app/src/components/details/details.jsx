import { useContext } from "react";
import { WeatherContext } from "../../context";

export function Details() {

    const { dataWeather } = useContext(WeatherContext);
    
    return(
        <div id="tab__02" className="tabs__block details">
            <div className="details__city">
                <h1>{dataWeather.name}</h1>
            </div>
            <ul className="details__list">
                <li className="details__list-item" id="details__temperature">Temperature: {dataWeather.temperature}</li>
                <li className="details__list-item" id="details__feels-like">Feels like: {dataWeather.feelsLike}</li>
                <li className="details__list-item" id="details__feels-weather">Weather: {dataWeather.weather}</li>
                <li className="details__list-item" id="details__sunrise">Sunrise: {dataWeather.sunrice}</li>
                <li className="details__list-item" id="details__sunset">Sunset: {dataWeather.sunset}</li>
            </ul>
        </div>
    )
}