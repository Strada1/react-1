import { LocationItem } from "../LocationItem/LocationItem";
import LocationListCss from './LocationList.module.css'

const LocationList = ({
  favoriteCities,
  setCity,
  deleteFavoriteCity,
}) => {
  return (
    <ul className={LocationListCss.locationsItems}>
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
