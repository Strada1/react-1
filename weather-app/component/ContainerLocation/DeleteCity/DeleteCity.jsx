import {getStorage, STORAGE_KEY} from "../../../JS/localStorage.js";
import City from "../City.jsx";
import {useContext} from "react";
import {MyContextLocation} from "../../../JS/myContextLocation.js";


function DeleteCity() {
const {favoriteCities, setFavoriteCities} = useContext(MyContextLocation)

    const cities = getStorage(STORAGE_KEY)
    if (!cities) {
        return "Нет избранных городов"
    }

    function deleteFavorite(id) {
        const newFavoriteCities = favoriteCities.filter((item) => item.id !== id)
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...newFavoriteCities]))
        const cities = getStorage(STORAGE_KEY)
        setFavoriteCities(cities);
        console.log(cities)
    }

    return (
        <div>
            {cities.map(({name, id}) => <City key={id} city={name} id={id} deleteFavorite={deleteFavorite}/>)}
        </div>
    );
}

export default DeleteCity;