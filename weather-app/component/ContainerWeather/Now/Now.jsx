import {nanoid} from 'nanoid'
import {useContext, useEffect} from "react";
import style from "./Now.module.css";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage.js";
import {SERVER} from "../../../JS/getData.js";
import {MyContextWeather} from "../../../JS/myContextLocation.js";

function Now() {

    useEffect(() => {
        setStorage(favoriteCities)
    })

    const {data, setFavoriteCities, favoriteCities} = useContext(MyContextWeather)
    if (!data) {
        return 'Нет данных...';
    }

    const dataNow = {
        cityName: data.name,
        degrees: data.main.temp.toFixed(0),
        src: `${SERVER.imgUrl}${data.weather[0].icon}@2x.png`,
    }

    function saveFavoriteCity() {
        // : TODO куда изначально нужно пушить ?
        //      В стейт или в setStorage[{name: dataNow.cityName, id: nanoid()}, ...favoriteCities]  ----------->
        //      -> value = getStorage ()  -> setFavoriteCities(value) ?
        //
        setFavoriteCities([{name: dataNow.cityName, id: nanoid()}, ...favoriteCities]);
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