import { LocationItem } from "../LocationItem/LocationItem";
import './LocationList.css'

const LocationList = ({
  favoriteCities,
  getForecast,
  setCity,
  deleteFavoriteCity,
}) => {
  return (
    <ul className="locations-items">
      {favoriteCities.map((city) => (
        <LocationItem
          key={city.id}
          city={city.city}
          getForecast={getForecast}
          setCity={setCity}
          deleteFavoriteCity={deleteFavoriteCity}
        />
      ))}
    </ul>
  );
};

export { LocationList };
