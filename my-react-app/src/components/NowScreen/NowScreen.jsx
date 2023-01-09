
import './NowScreen.css';
import { useContext, useEffect, useState } from 'react';
import { CitiesContext } from '../../context';
import { LOCAL_STORAGE } from '../../constans/constans';


const NowScreen = ({locationList, setlocationList}) => {
  const nowCity = useContext(CitiesContext);
  const [favouriteCities, setFavouriteCities] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.FAVOURITE_CITIES)) || []
  );

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE.FAVOURITE_CITIES, JSON.stringify(favouriteCities));
      setlocationList(JSON.parse(localStorage.getItem(LOCAL_STORAGE.FAVOURITE_CITIES)));
  }, [favouriteCities]);

    const addFovouriteCity = (city, id) => {
        const current = favouriteCities.find(item => item.id === id);
        if(!current)  setFavouriteCities([...favouriteCities, {cityName: city, id: nowCity.id}]);

    };

  return (
    <div className="weather--now">
      <div className="now--temperature">{nowCity.temperature}</div>
      <div className="now--icon" style={{ backgroundImage: `url(${nowCity.icon})` }}></div>
      <div className="now--location">
        <div className="now-city">{nowCity.name}</div>
        <button className="now-btn" onClick={() => addFovouriteCity(nowCity.name, nowCity.id)}>

        </button>
      </div>
    </div>
  );
};
export default NowScreen;
