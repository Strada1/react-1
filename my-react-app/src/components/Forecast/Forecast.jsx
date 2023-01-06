import { ForecastForm } from "../ForecastForm/ForecastForm";
import { ForecastSection } from "../ForecastSection/ForecastSection";
import { FavoriteLocations } from "../FavoriteLocations/FavoriteLocations";
import "./Forecast.css";
import { nanoid } from "nanoid";

const Forecast = ({
  currentForecast,
  timeLineForecast,
  favoriteCities,
  setFavoriteCities,
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
      <ForecastForm />
      <div className="forecast-container">
        <ForecastSection
          currentForecast={currentForecast}
          timeLineForecast={timeLineForecast}
          addFavoriteCity={addFavoriteCity}
          favoriteCities={favoriteCities}
        />
        <FavoriteLocations
          favoriteCities={favoriteCities}
          deleteFavoriteCity={deleteFavoriteCity}
        />
      </div>
    </div>
  );
};

export { Forecast };
