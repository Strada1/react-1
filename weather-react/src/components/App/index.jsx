import React, { useState, useEffect } from 'react';
import { useFetching } from '../../hooks/fetching';
import CitiesService from '../../API/CitiesService';
import storage from '../../modules/localstorage';
import AddedCities from '../AddedCities';
import WeatherContent from '../WeatherContent';
import WeatherForm from '../WeatherForm';
import WeatherTabs from '../WeatherTabs';
import classes from './index.module.css';

const tabs = [
  {value: 'now', title: 'Now'},
  {value: 'details', title: 'Details'},
  {value: 'forecast', title: 'Forecast'}
];

const DEFAULT_STATE = {
  TAB: tabs[0],
  ERROR: '',
  ADDED_CITIES: [],
  CURRENT_CITY: '',
  WEATHER: null,
  FORECAST: null
};

const App = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_STATE.TAB);
  const [error, setError] = useState(DEFAULT_STATE.ERROR);
  const [addedCities, setAddedCities] = useState(DEFAULT_STATE.ADDED_CITIES);
  const [weather, setWeather] = useState(DEFAULT_STATE.WEATHER);
  const [forecast, setForecast] = useState(DEFAULT_STATE.FORECAST);

  const [fetchWeather, weatherError] = useFetching(async (city) => {
    const response = await CitiesService.getWeatherByCityName(city);
    const result = await response.json();

    if (result.message) {
      setError(result.message);
    } else {
      setWeather(result);
      setError(DEFAULT_STATE.ERROR);
      saveCityName(city);
    }
  });

  const [fetchForecast, forecastError] = useFetching(async (city) => {
    const response = await CitiesService.getForecastByCityName(city);
    const result = await response.json();

    if (result.message) {
      setError(result.message);
    } else {
      setForecast(result);
      setError(DEFAULT_STATE.ERROR);
    }
  });

  useEffect(() => {
    const [loadedCities, loadedCitiesError] = storage.getFavouriteLocations();
    const [currentCity, currentCityError] = storage.getCurrentLocation();

    let storageError = loadedCitiesError;
    storageError = storageError && currentCityError
      ? storageError + ' ' + currentCityError
      : currentCityError;

    if (storageError) {
      setError(storageError);
    }

    if (loadedCities) {
      setAddedCities(loadedCities);
    }

    if (currentCity) {
      handleCitySubmit(currentCity);
    }
  }, []);

  const handleCitySubmit = (city) => {
    fetchWeather(city);
    fetchForecast(city);
  };

  const handleAddToFavourites = (city) => {
    if (!addedCities.find((addedCity) => addedCity.id === city.id)) {
      const updatedCities = [...addedCities, city];
      setAddedCities(updatedCities);
      const storageError = storage.saveFavouriteLocations(updatedCities);
      storageError && setError(storageError);
    }
  };

  const handleDeleteFromFavourites = (city) => {
    const updatedCities = addedCities.filter((addedCity) => addedCity.id !== city.id);
    setAddedCities(updatedCities);
    const storageError = storage.saveFavouriteLocations(updatedCities);
    storageError && setError(storageError);
  };

  const saveCityName = (city) => {
    const storageError = storage.saveCurrentLocation(city);
    storageError && setError(storageError);
  };

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <h1 className={classes.appTitle}>Weather</h1>
      </header>

      <main className={classes.appMain}>
        <section className={classes.weatherForm}>
          <WeatherForm onSubmit={handleCitySubmit} />
        </section>

        <section className={classes.weatherMain}>
          <WeatherContent
            weather={weather}
            forecast={forecast}
            addedCities={addedCities}
            activeTab={activeTab}
            className={classes.weatherContent}
            addCity={handleAddToFavourites}
            deleteCity={handleDeleteFromFavourites}
          />
          <WeatherTabs
            tabs={tabs}
            activeTab={activeTab}
            changeTab={setActiveTab}
          />
        </section>

        <section className={classes.weatherList}>
          <AddedCities
            items={addedCities}
            deleteCity={handleDeleteFromFavourites}
            chooseCity={handleCitySubmit}
          />
        </section>
      </main>

      <footer className={classes.isError}>
        {error || weatherError || forecastError}
      </footer>
    </div>
  )
};

export default App;
