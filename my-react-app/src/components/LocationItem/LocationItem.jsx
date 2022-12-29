import "./LocationItem.css";

const LocationItem = ({ city, getForecast, deleteFavoriteCity }) => {
  return (
    <li>
      <p onClick={() => {getForecast(city);}}>
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
