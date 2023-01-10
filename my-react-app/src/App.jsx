import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/Searchbar/Searchbar'
import MainBlock from './components/MainBlock/MainBlock'

import  {fetchWeather, fethcForecast}  from './fetch/fetch'
import {  DEFAULT_CITY } from './constans/constans'
import { CitiesContext, ForecastContext } from './context';

function App() {

  const [city, setCity] = useState([])
  const [forecast, setForecast] = useState([])
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY)


  const searchCityHandler = (event, cityName) => {
    event.preventDefault();
    setCurrentCity(cityName)
  }


  useEffect(() => {
    fetchWeather(currentCity).then(result => setCity(result))
    fethcForecast(currentCity).then(result => setForecast(result))

  }, [currentCity])


  console.log('App', city);


  return (
    <div className="App">
      <div className='weather--wrapper'>
        <div className='weather--box'>
          <SearchBar
            searchCityHandler = {(event, text) => searchCityHandler(event, text)}
          />
          <CitiesContext.Provider value={city}>
            <ForecastContext.Provider value={forecast}>
              <MainBlock setCurrentCity={setCurrentCity} />
            </ForecastContext.Provider>
          </CitiesContext.Provider>


        </div>
      </div>
    </div>
  )
}

export default App
