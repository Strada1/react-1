//TODO:
//Добавить удаление в localstorage списка favorite
//по нажатию по компоненту списка favorite делать запрос и удаление
//изменить способ навигации, не через css
//ещё разок просмотреть повторения, убрать лишнее, точно надо рефакторить

import React from 'react';
import { useState } from 'react';
import Now from '../Now/Now';
import Details from '../Details/Details';
import Forecast from '../Forecast/Forecast';
import Favorites from '../Favorites/Favorites';
import Form from '../Form/Form';
import iconContext from '../../context';
import './App.css';

const icon = (description) => {
  if (description === 'overcast clouds' || description === 'broken clouds') {
    return 'overcastClouds.png';
  } else if (description === 'scattered clouds' || description === 'few clouds') {
    return 'cloud.png';
  } else if (description.includes('rain')) {
    return 'rain.png';
  } else if (description === 'clear sky') {
    return 'sun.png';
  } else if (description.includes('snow')) {
    return 'snow.png';
  }
};

function App() {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || []);

  return (
    <div className="App">
      <Form setWeather={setWeather} setForecast={setForecast} />
      <div className="windows">
        <div className="leftWindow">
          <div className="status">
            {weather ? (
              <Now
                temp={weather.main.temp}
                city={weather.name}
                setFavorite={setFavorite}
                favorite={favorite}
                description={
                  weather.weather[0].description[0].toLowerCase() +
                  weather.weather[0].description.slice(1)
                }
                icon={icon}
              />
            ) : null}
            {weather ? (
              <Details
                city={weather.name}
                temp={weather.main.temp}
                feels={weather.main.feels_like}
                description={
                  weather.weather[0].description[0].toLowerCase() +
                  weather.weather[0].description.slice(1)
                }
                timezone={weather.timezone}
                timeSunrise={weather.sys.sunrise}
                timeSunset={weather.sys.sunset}
              />
            ) : null}
            {forecast ? (
              <iconContext.Provider value={icon}>
                <Forecast forecast={forecast} />
              </iconContext.Provider>
            ) : null}
          </div>
          <div className="tabs">
            <nav className="tabsItems">
              <a href="#tab_01" className="tabsItem">
                Now
              </a>
              <a href="#tab_02" className="tabsItem">
                Details
              </a>
              <a href="#tab_03" className="tabsItem">
                Forecast
              </a>
            </nav>
          </div>
        </div>
        <Favorites favorite={favorite} />
      </div>
    </div>
  );
}

export default App;
