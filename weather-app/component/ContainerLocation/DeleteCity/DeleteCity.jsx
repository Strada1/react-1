import {useContext, useEffect} from "react";
import {getStorage, setStorage, STORAGE_KEY} from "../../../JS/localStorage";
import City from "../City";
import {MyContextLocation} from "../../../JS/myContextLocation";

function DeleteCity() {
    const {favoriteCities, setFavoriteCities} = useContext(MyContextLocation)

    useEffect(() => {
        setStorage(favoriteCities);
    })

    if (!favoriteCities.length) {
        return "Нет избранных городов"
    }

    function deleteFavorite(id) {
        const newFavoriteCities = favoriteCities.filter((item) => item.id !== id)
        setFavoriteCities(newFavoriteCities );
    }

    const storageCity = getStorage(STORAGE_KEY)
    // TODO:  тут все асинхронно не пойму от куда рендерить из useState или  Storage ?
    //  мб не нужно использовать storageCity для рендера ?
    //  Или тут нужно использовать useContext для рендера ?

    return (
        <div>
            {favoriteCities.map(({name, id}) => <City key={id} city={name} id={id} deleteFavorite={deleteFavorite}/>)}
        </div>
    );
}

export default DeleteCity;