import React from 'react';
import style from "./Forecast.module.css";
import {format} from "date-fns";

const Content = ({item}) => {

    const serverImgUrl = `http://openweathermap.org/img/wn/`;

    const  src = `${serverImgUrl}${item.weather[0]['icon']}.png`

    return (
        <div className={style.Content}>
            <div className={style.Header}>
                <span>{format(new Date(item.dt_txt), "d MMM")}</span>
                <span>{format(new Date(item.dt_txt), "hh:mm")}</span>
            </div>
            <div className={style.Data}>
                <div className={style.Temp}>
                    <span>Temperature: {Math.round(item.main.temp)}°</span>
                    <span>Feels like: {Math.round(item.main.feels_like)}°</span>
                </div>
                <div className={style.Temp}>
                    <span>{item.weather[0].main}</span>
                    <img className={style.Img} src={src} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Content;