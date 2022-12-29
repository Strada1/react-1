import { useState } from "react";
import "./ForecastForm.css"
const defaultValue = "";

const ForecastForm = ({ getForecast }) => {
  const [city, setCity] = useState(defaultValue);

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      className="forecast-form"
      action="post"
      onSubmit={(e) => {
        e.preventDefault();
        getForecast(city);
        setCity(defaultValue);
      }}
    >
      <input
        type="text"
        placeholder="City"
        className="city-input"
        onChange={onChange}
        value={city}
      />
      <button className="button" type="submit"></button>
    </form>
  );
};

export { ForecastForm };
