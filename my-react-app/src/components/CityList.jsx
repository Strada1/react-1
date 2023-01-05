import closeTask from '../assets/close.svg';
import { ELEMENT } from './methodsJs/elements';
import { setLocalStorageItem } from './methodsJs/LocalSet';

export function CityList({ citiesFavorite, setCitiesFavorite, addRequest }) {
  const deleteCity = (listCity, name) => {
    const filterCitie = listCity.filter((item) => item.cityName !== name);
    setCitiesFavorite(filterCitie);
    setLocalStorageItem(ELEMENT.selectedCities, filterCitie);
  };
  return (
    <div className="weather_locations">
      <div className="added_locations">
        <div className="locations_text">Added Locations:</div>
        <ul className="location-list">
          {!citiesFavorite
            ? []
            : citiesFavorite.map((item) => {
                return (
                  <li key={item.id}>
                    <span onClick={() => addRequest(item.cityName)}>
                      {item.cityName}
                    </span>
                    <img
                      src={closeTask}
                      alt=""
                      className="close-city"
                      onClick={() => deleteCity(citiesFavorite, item.cityName)}
                    />
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
