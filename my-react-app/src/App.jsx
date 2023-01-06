import { useState, useEffect } from "react";
import { Forecast } from "./components/Forecast/Forecast";
import { Loader } from "./Components/Loader/Loader";
import { JSONparse } from "./js/JSONparse.js";
import { SERVER } from "./js/serverElements.js";
import { loadWeather } from "./js/loadWeather.js";
import { loadTimelineForecast } from "./js/loadTimelineForecast.js";
import { ForecastContext } from "./js/ForecastContext.js";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentForecast, setCurrentForecast] = useState();
  const [timeLineForecast, setTimeLineForecast] = useState();
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    const favoriteList = JSONparse(localStorage.getItem("favoriteCities"));
    const currentCity = JSONparse(localStorage.getItem("currentCity"));

    if (currentCity) {
      getForecast(currentCity);
    }

    if (!currentCity && favoriteList?.[0]) {
      getForecast(favoriteList[0].city);
    }

    if (favoriteList) {
      setFavoriteCities(favoriteList);
    }
    setIsLoading(false);
  }, []);

  const getForecast = (cityItem) => {
    const URL = `${SERVER.serverForecastUrl}?q=${cityItem}&appid=${SERVER.apiKey}&units=metric`;
    const timelineURL = `${SERVER.serverTimelineURL}?q=${cityItem}&cnt=3&appid=${SERVER.apiKey}&units=metric`;
    const forecast = loadWeather(URL);
    forecast.then((result) => {
      if (!result) return;
      setCurrentForecast(result);
      localStorage.setItem("currentCity", JSON.stringify(result.forecastCity));
    });

    const timeLineForecast = loadTimelineForecast(timelineURL);
    timeLineForecast.then((result) => {
      if (!result) return;
      setTimeLineForecast(result);
    });
  };

  const value = {getForecast};

  return (
    <ForecastContext.Provider value ={value}>
    <div className="App">
      <div className="container">
        {isLoading ? <Loader/> : <Forecast
          currentForecast={currentForecast}
          setCurrentForecast={setCurrentForecast}
          timeLineForecast={timeLineForecast}
          setTimeLineForecast={setTimeLineForecast}
          favoriteCities={favoriteCities}
          setFavoriteCities={setFavoriteCities}
        />}
      </div>
    </div>
  </ForecastContext.Provider>
  );
}

export default App;
