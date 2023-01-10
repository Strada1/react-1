import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/Searchbar/Searchbar'
import MainBlock from './components/MainBlock/MainBlock'

import  {fetchWeather}  from './fetch/fetch'
import {  DEFAULT_CITY } from './constans/constans'
import { CitiesContext } from './context';

function App() {

  const [city, setCity] = useState([])
  const [currentCity, setCurrentCity] = useState(DEFAULT_CITY)


  const searchCityHandler = (event, cityName) => {
    event.preventDefault();
    setCurrentCity(cityName)
  }


  useEffect(() => {
    fetchWeather(currentCity).then(result => setCity(result))
    console.log('useEffect');
  }, [currentCity])


  console.log('App', city);


  return (
    <div className="App">
      <div className='weather--wrapper'>
        <div className='weather--box'>
          <SearchBar
            searchCityHandler = {(event, text) => searchCityHandler(event, text)}
          />
          <CitiesContext.Provider value = { city }>
            <MainBlock setCurrentCity={setCurrentCity } />
          </CitiesContext.Provider>


        </div>
      </div>
    </div>
  )
}

export default App
