import { useState, useEffect } from "react";
import { ForecastForm } from "../ForecastForm/ForecastForm";
import { ForecastSection } from "../ForecastSection/ForecastSection";
import { FavoriteLocations } from "../FavoriteLocations/FavoriteLocations";
import "./Forecast.css"
import { SERVER } from "../../js/serverElements.js";
import { loadWeather } from "../../js/loadWeather.js";
import { JSONparse } from "../../js/JSONparse.js";
import { loadTimelineForecast } from "../../js/loadTimelineForecast.js";
import { nanoid } from 'nanoid'

const Forecast = () => {
  const [currentForecast, setCurrentForecast] = useState();
  const [timeLineForecast, setTimeLineForecast] = useState();
  const [favoriteCities, setFavoriteCities] = useState([]);


  useEffect(()=> {
  
      const favoriteList = JSONparse(localStorage.getItem("favoriteCities"));
      const currentCity = JSONparse(localStorage.getItem("currentCity"));
   

    if(currentCity) {
      getForecast(currentCity);
    }

    if(!currentCity && favoriteList?.[0]) {
      getForecast(favoriteList[0].city);
    }

    if(favoriteList) {
      setFavoriteCities(favoriteList);
    }
  }, [])

  const addFavoriteCity = () => {
    if(!currentForecast.forecastCity) return;
    if (favoriteCities.find((item) => item.city === currentForecast.forecastCity)) {
      const newFavoriteCities = favoriteCities.filter((item) => item.city !== currentForecast.forecastCity);
      setFavoriteCities(newFavoriteCities);
      localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities))
    } else {
      const newFavoriteCities = [...favoriteCities, {city: currentForecast.forecastCity, id: nanoid()}];
      setFavoriteCities(newFavoriteCities);
      localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities))
    }
  };

  const deleteFavoriteCity = (cityItem) => {
    const newFavoriteCities = favoriteCities.filter((item) => item.city !== cityItem);
    setFavoriteCities(newFavoriteCities);
    localStorage.setItem("favoriteCities", JSON.stringify(newFavoriteCities));
    
  };

  const getForecast = (cityItem) => {
    const URL = `${SERVER.serverForecastUrl}?q=${cityItem}&appid=${SERVER.apiKey}&units=metric`;
    const timelineURL = `${SERVER.serverTimelineURL}?q=${cityItem}&cnt=3&appid=${SERVER.apiKey}&units=metric`;

    const forecast = loadWeather(URL);
    forecast.then((result) => {
      if(!result) return;
      setCurrentForecast(result);
      localStorage.setItem("currentCity", JSON.stringify(result.forecastCity))
    });
      

    const timeLineForecast = loadTimelineForecast(timelineURL);
    timeLineForecast.then((result) => {
      if(!result) return;
      setTimeLineForecast(result)
    });
    
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
