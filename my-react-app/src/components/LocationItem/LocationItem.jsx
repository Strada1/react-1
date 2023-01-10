import { useContext } from "react";
import { ForecastContext } from "../../js/ForecastContext";
import LocationItemCss from "./LocationItem.module.css";

const LocationItem = ({ city, deleteFavoriteCity }) => {
const value = useContext(ForecastContext)

  return (
    <li>
      <p onClick={() => {value.getForecast(city);}}>
        {city}
      </p>
      <button
        className={LocationItemCss.buttonExit}
        onClick={() => { deleteFavoriteCity(city);}}
      />
    </li>
  );
};

export { LocationItem };
