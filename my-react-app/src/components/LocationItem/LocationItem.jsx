import { useContext } from "react";
import { ForecastContext } from "../../js/ForecastContext";
import "./LocationItem.css";

const LocationItem = ({ city, deleteFavoriteCity }) => {
const value = useContext(ForecastContext)

  return (
    <li>
      <p onClick={() => {value.getForecast(city);}}>
        {city}
      </p>
      <button
        className="button-exit"
        onClick={() => { deleteFavoriteCity(city);}}
      />
    </li>
  );
};

export { LocationItem };
