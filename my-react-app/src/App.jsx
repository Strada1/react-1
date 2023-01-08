import './App.css';
import './reset.css';
import { FormSearch } from "./components/search/search";
import { Now } from "./components/now/now";
import { Details } from "./components/details/details";
import { Forecast } from "./components/forecast/forecast";
import { Navigation } from "./components/navigation/navigation";
import { ListCity } from "./components/listcity/listCity";
import { useEffect, useState } from 'react';
import { serverUrl, apiKey, urlForecast, defaultCity, KEY } from "./const";
import { getDataServer, getForecastServer } from "./server";
import { WeatherContext, CitiesContext } from "./context";
import { addCityStorage, saveCityStorage } from "./storage";

export function App() {
  const [ cities, setCities ] = useState([]);
  const [ currentCity, setCurrentCity ] = useState(defaultCity);
  const [ dataWeather, setdataWeather ] = useState('');
  const [ forecast, setForecast ] = useState('');
  const [ cityForecast, setCityForecast] = useState('');

  useEffect(() => {
    const listCities = addCityStorage(KEY.CITY);
    const cityCurrent = addCityStorage(KEY.CURRENT_CITY);

    if (listCities) setCities(listCities);
    if (cityCurrent) setCurrentCity(cityCurrent);
    saveDataWeather(currentCity);
    saveForecast(currentCity);
  }, [])

  function addCity(city) {
    if (cities.find((cityItem) => cityItem === city)) return;
    const listCities = [city, ...cities];
    setCities(listCities);
    saveCityStorage(KEY.CITY, listCities);
  }

  function addCurrentCity(city) {
    setCurrentCity(city);
    saveCityStorage(KEY.CURRENT_CITY, city);
    saveDataWeather(city);
    saveForecast(city)
  }

  function deleteTask(city) {
    const citiesList = cities.filter((cityItem) => city !== cityItem);
    setCities(citiesList);
    localStorage.setItem("city", JSON.stringify(citiesList));
  }

  async function saveDataWeather(city) {
    const weather = await getDataServer(`${serverUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!weather) return;
    setdataWeather(weather);
  }

  async function saveForecast(city) {
    const dataForecast = await getForecastServer(`${urlForecast}?q=${city}&cnt=3&appid=${apiKey}&units=metric`);
    if (!dataForecast) return;
    setForecast(dataForecast);
    setCityForecast(city);
  }

  return (
    <div>
      <div className="container">
        <FormSearch addCurrentCity={addCurrentCity}/>
        <div className="main">
          <div className="tabs">
            <div className="tabs__body">
              <WeatherContext.Provider value={{dataWeather}}>
                <Now addCity={addCity} />
                <Details />
              </WeatherContext.Provider>
              <Forecast forecast={ forecast } currentCity={cityForecast}/>
            </div>
            <Navigation />
          </div>
          <CitiesContext.Provider value={{addCurrentCity, deleteTask}}>
            <ListCity listCities={cities}/>
          </CitiesContext.Provider>
        </div>
      </div>
    </div>
  )
}

