import style from "../ContainerLocation.module.css";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage.js";


const DeleteCity = ({favoriteCities,setFavoriteCities}) => {
    //:TODO проверка не срабатывает
    if (!favoriteCities) {
        return "Нет избранных городов"
    }

    function deleteFavorite(city) {
        const newFavoriteCities = favoriteCities.filter((item) => item !== city)
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...newFavoriteCities]))
        const cities = getStorage(STORAGE_KEY)
        setFavoriteCities(cities);
    }

    return (
        <div>
            {favoriteCities.map((city) =>
                <div className={style.Name}>
                    <button className={style.CityName}>{city}</button>
                    <button onClick={() => deleteFavorite(city)} className={style.Delete}></button>
                </div>)}
        </div>
    );
};

export default DeleteCity;