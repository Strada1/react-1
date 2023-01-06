import { useContext, useState } from "react";
import { ForecastContext } from "../../js/ForecastContext";
import ForecastFormCss from "./ForecastForm.module.css"
const defaultValue = "";

const ForecastForm = () => {
  const [city, setCity] = useState(defaultValue);
  const value = useContext(ForecastContext);

  const onChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form
      className={ForecastFormCss.forecastForm}
      action="post"
      onSubmit={(e) => {
        e.preventDefault();
        value.getForecast(city);
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
      <button className={ForecastFormCss.button} type="submit"></button>
    </form>
  );
};

export { ForecastForm };
