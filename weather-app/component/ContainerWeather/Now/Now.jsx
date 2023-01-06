import {nanoid} from 'nanoid'
import style from "./Now.module.css";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage.js";
import {SERVER} from "../../../JS/getData.js";
import {useContext} from "react";
import {MyContextWeather} from "../../../JS/myContextLocation.js";

function Now() {
    const {data, setFavoriteCities} = useContext(MyContextWeather)
    if (!data) {
        return 'Нет данных...';
    }

    const dataNow = {
        cityName: data.name,
        degrees: data.main.temp.toFixed(0),
        src: `${SERVER.imgUrl}${data.weather[0].icon}@2x.png`,
    }

    function saveFavoriteCity() {
        setStorage({name: dataNow.cityName, id: nanoid()})
        const cities = getStorage(STORAGE_KEY)
        setFavoriteCities(cities);
    }

    return (
        <div className={style.Content}>
            <h2 className={style.Degrees}>
                <span>{dataNow.degrees}°</span>
            </h2>
            <img src={dataNow.src}/>
            <div className={style.NowFooter}>
                <p>{dataNow.cityName}</p>
                <button onClick={() => saveFavoriteCity()} className={style.Like}/>
            </div>
        </div>
    );
}

export default Now;