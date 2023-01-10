import React, { useState, useEffect } from 'react';
import selectedCityContext from './selectedCityContext';
import useLocalStorage from '../../customHooks/useLocalStorage';
import SearchCity from '../SearchCity/SearchCity';
import Information from '../Information/Information';
import AddedLocations from '../AddedLocations/AddedLocations';
import sendWeatherRequest from '../../additional/sendWeatherRequest';
import {
  SERVER_URL_WEATHER,
  SERVER_URL_FORECAST,
  API_KEY,
} from '../../additional/const';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState('');
  const [cityWeatherInfo, setCityWeatherInfo] = useState(null);
  const [selectedCities, setSelectedCities] = useLocalStorage(
    [],
    'selectedCities'
  );
  const deleteSelectedCity = (id) => {
    const copySelectedCities = [...selectedCities];
    const newSelectedCities = copySelectedCities.filter(
      (selectedCity) => selectedCity.id !== id
    );
    setSelectedCities(newSelectedCities);
  };
  useEffect(() => {
    async function fetchDataWeather() {
      if (city !== '') {
        const responseJSON = await sendWeatherRequest(
          SERVER_URL_WEATHER,
          API_KEY,
          city
        );
        setCityWeatherInfo(responseJSON);
      }
    }
    async function fetchDataForecast() {
      if (city !== '') {
        const responseJSON = await sendWeatherRequest(
          SERVER_URL_FORECAST,
          API_KEY,
          city
        );
        setForecast(responseJSON);
      }
    }
    fetchDataWeather();
    fetchDataForecast();
  }, [city]);
  const contextValue = {
    selectedCities,
  };
  return (
    <div className="wrapper">
      <div className="block-wrapper">
        <selectedCityContext.Provider value={contextValue}>
          <div className="block">
            <SearchCity setCity={setCity} />
            <Information
              cityWeatherInfo={cityWeatherInfo}
              forecast={forecast}
              setSelectedCities={setSelectedCities}
            />
            <AddedLocations
              deleteSelectedCity={deleteSelectedCity}
              setCity={setCity}
            />
          </div>
        </selectedCityContext.Provider>
      </div>
    </div>
  );
}

export default App;
