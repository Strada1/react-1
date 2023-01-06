import React from 'react';
import style from "./ContainerLocation.module.css";

function City({city, id, deleteFavorite}) {
    return (
        <div className={style.Name}>
            <button className={style.CityName}>{city}</button>
            <button onClick={() => deleteFavorite(id)} className={style.Delete} />
        </div>
    );
}

export default City;