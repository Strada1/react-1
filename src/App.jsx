import { useEffect, useState } from 'react';
import './App.css';
import { CityList } from './components/CityList/CityList';
import { Details } from './components/Details/Details';
import { Forecast } from './components/Forecast/Forecast';
import { Now } from './components/Now/Now';
import { SearchForm } from './components/SearchForm/SearchForm';
import { TabButtons } from './components/TabButtons/TabButtons';
import { defaultForecastWeather, defaultWeather } from './const';
import { getForecastWeather, getWeather } from './fetch';
import { getCityList, getCurrentCity, saveCurrentCity } from './storage';

function App() {
  const [city, setCity] = useState(getCurrentCity());
  const [weather, setWeather] = useState(defaultWeather);
  const [forecastWeather, setForecastWeather] = useState(defaultForecastWeather);
  const [cityList, setCityList] = useState(getCityList());
  const [tab, setTab] = useState('Now');
  const [tabBlock, setTabBlock] = useState();

  useEffect(() => {
    saveCurrentCity(city);
    getWeather(city).then((result) => {
      setWeather(result);
    });
    getForecastWeather(city).then(((result) => {
      setForecastWeather(result);
    }));
  }, [city]);

  useEffect(() => {
    switch (tab) {
      case 'Now':
        setTabBlock(<Now weather={weather} cityList={cityList} setCityList={setCityList} />);
        break;
      case 'Details':
        setTabBlock(<Details weather={weather} />);
        break;
      case 'Forecast':
        setTabBlock(<Forecast weather={forecastWeather} />);
        break;
      default:
        break;
    }
  }, [tab, weather, forecastWeather]);

  return (
    <div className="weather">
      <SearchForm setCity={setCity} city={city} />
      <div className="weather__bottom">
        <div className="weather__block">
          {tabBlock}
          <TabButtons setTab={setTab} weather={weather} />
        </div>
        <div className="weather__block">
          <CityList setCity={setCity} cityList={cityList} setCityList={setCityList} />
        </div>
      </div>
    </div>
  );
}

export default App;
