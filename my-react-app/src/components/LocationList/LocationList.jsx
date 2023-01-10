import { LocationItem } from "../LocationItem/LocationItem";
import './LocationList.css'

const LocationList = ({
  favoriteCities,
  setCity,
  deleteFavoriteCity,
}) => {
  return (
    <ul className="locations-items">
      {favoriteCities.map(({city, id}) => (
        <LocationItem
          key={id}
          city={city}
          setCity={setCity}
          deleteFavoriteCity={deleteFavoriteCity}
        />
      ))}
    </ul>
  );
};

export { LocationList };
