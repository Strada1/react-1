import {useContext} from "react";
import style from "./Details.module.css";
import {MyContextWeather} from "../../../JS/myContextLocation.js";

function Details() {
    const {data} = useContext(MyContextWeather)
    if (!data) {
        return 'Нет данных...';
    }

    const detailsData = {
        cityName: data.name,
        degrees: data.main.temp.toFixed(0),
        feelsLike: data.main.feels_like,
        descriptions: data.weather[0].description,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    }

    return (
        <div className={style.Container}>
            <h2>{detailsData.cityName}</h2>
            <p>Temperature: {detailsData.degrees}°</p>
            <p>Feels like: {detailsData.feelsLike}</p>
            <p>Weather: {detailsData.descriptions}</p>
            <p>Sunrise: {detailsData.sunrise}</p>
            <p>Sunset: {detailsData.sunset}</p>
        </div>
    );
}

export default Details;