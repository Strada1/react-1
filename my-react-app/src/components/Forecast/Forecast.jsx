import { ForecastForm } from "../ForecastForm/ForecastForm";
import { ForecastSection } from "../ForecastSection/ForecastSection";
import { FavoriteLocations } from "../FavoriteLocations/FavoriteLocations";
import "./Forecast.css";
import { nanoid } from "nanoid";

const Forecast = ({
  getForecast,
  currentForecast,
  setCurrentForecast,
  timeLineForecast,
  setTimeLineForecast,
  favoriteCities,
  setFavoriteCities
}) => {
  const addFavoriteCity = () => {
    if (!currentForecast.forecastCity) return;
    if (
      favoriteCities.find((item) => item.city === currentForecast.forecastCity)
    ) {
      const newFavoriteCities = favoriteCities.filter(
        (item) => item.city !== currentForecast.forecastCity
      );
      setFavoriteCities(newFavoriteCities);
      localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities));
    } else {
      const newFavoriteCities = [
        ...favoriteCities,
        { city: currentForecast.forecastCity, id: nanoid() },
      ];
      setFavoriteCities(newFavoriteCities);
      localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities));
    }
  };

  const deleteFavoriteCity = (cityItem) => {
    const newFavoriteCities = favoriteCities.filter(
      (item) => item.city !== cityItem
    );
    setFavoriteCities(newFavoriteCities);
    localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities));
  };

  return (
    <div className="content">
      <ForecastForm
        setCurrentForecast={setCurrentForecast}
        setTimeLineForecast={setTimeLineForecast}
        getForecast={getForecast}
      />
      <div className="forecast-container">
        <ForecastSection
          currentForecast={currentForecast}
          timeLineForecast={timeLineForecast}
          addFavoriteCity={addFavoriteCity}
          favoriteCities={favoriteCities}
        />
        <FavoriteLocations
          favoriteCities={favoriteCities}
          getForecast={getForecast}
          deleteFavoriteCity={deleteFavoriteCity}
        />
      </div>
    </div>
  );
};

export { Forecast };
