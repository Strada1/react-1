import style from "../ContainerLocation.module.css";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage.js";

// TODO: НУЖНО ВЫНЕСТИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ
function City({city, deleteFavorite}) {
    return (
        <div className={style.Name}>
            <button className={style.CityName}>{city}</button>
            <button onClick={() => deleteFavorite(city)} className={style.Delete}></button>
        </div>
    );
}

const DeleteCity = ({favoriteCities, setFavoriteCities}) => {

    const cities = getStorage(STORAGE_KEY)
    if (!cities.length) {
        return "Нет избранных городов"
    }

    function deleteFavorite(city) {
        const newFavoriteCities = favoriteCities.filter((item) => item !== city)
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...newFavoriteCities]))
        const cities = getStorage(STORAGE_KEY)
        setFavoriteCities(cities);
    }

    // TODO: ИСПРАВИТЬ KEY
    return (
        <div>
            {cities.map((city, index) => <City key={index} city={city} deleteFavorite={deleteFavorite}/>)}
        </div>
    );
};

export default DeleteCity;