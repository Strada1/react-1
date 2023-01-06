import React from 'react';
import {format} from "date-fns";
import style from "./Forecast.module.css";
import {SERVER} from "../../../JS/getData.js";

function Content({item}) {
    if (!item) {
        return;
    }

    const forecastData = {
        date: {
            month: format(new Date(item.dt_txt), "d MMM"),
            time: format(new Date(item.dt_txt), "hh:mm"),
        },
        temperature: Math.round(item.main.temp),
        feelsLike: Math.round(item.main.feels_like),
        text: item.weather[0].main,
        img: `${SERVER.imgUrl}${item.weather[0].icon}.png`,
    }

    return (
        <div className={style.Content}>
            <div className={style.Header}>
                <span>{forecastData.date.month}</span>
                <span>{forecastData.date.time}</span>
            </div>
            <div className={style.Data}>
                <div className={style.Temp}>
                    <span>Temperature: {forecastData.temperature}°</span>
                    <span>Feels like: {forecastData.feelsLike}°</span>
                </div>
                <div className={style.Temp}>
                    <span>{forecastData.text}</span>
                    <img className={style.Img} src={forecastData.img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Content;