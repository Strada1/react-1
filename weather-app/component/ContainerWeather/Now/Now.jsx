import style from "./Now.module.css";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage.js";

const Now = ({data, setFavoriteCities, favoriteCities}) => {
    if (!data) {
        return 'Нет данных...';
    }
    const serverImgUrl = `http://openweathermap.org/img/wn/`;

    const nowData = {
        cityName: data.name,
        degrees: data.main.temp.toFixed(0),
        src: `${serverImgUrl}${data.weather[0]['icon']}@2x.png`,
    }

    function saveFavoriteCity() {
        setStorage(nowData.cityName)
        const cities = getStorage(STORAGE_KEY)
        setFavoriteCities(cities);
    }

    return (
        <div className={style.Content}>
            <h2 className={style.Degrees}>
                <span>{nowData.degrees}°</span>
            </h2>
            <img src={nowData.src}/>
            <div className={style.NowFooter}>
                <p>{nowData.cityName}</p>
                <button onClick={() => saveFavoriteCity()} className={style.Like}>
                </button>
            </div>
        </div>
    );
};
//
export default Now;