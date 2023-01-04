import React, {useState, useEffect} from "react";
import Search from "./components/search";
import Tabs from "./components/tabs/tabs";
import './app.css'
import {
  serverUrl,
  apiKey,
  localstorageCity,
  forecastURL,
} from "./js/consts";
import { getData } from "./js/getData";
import { getForecast } from "./js/getForecast";

function App() {
  const [value, setValue] = useState('Aktobe');
  const [display, setDisplay] = useState('tab-1');
  const [temperature, setTemperature] = useState("");
  const [image, setImage] = useState("");
  const [feelsLike, setfeelsLike] = useState("");
  const [weather, setWeather] = useState("");
  const [sunrice, setSunrice] = useState("");
  const [sunset, setSunset] = useState("");
  const [favoriteCity, setFavoriteCity] = useState();
  const [future, setFuture] = useState([]);

  function trackInput(newValue) {
    setValue(newValue);
  }

  function displayTab(value) {
    setDisplay(value);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(localstorageCity));

    if (items) {
      setFavoriteCity(items);
    }
  }, []);

  const urls = `${serverUrl}?q=${value}&appid=${apiKey}&units=metric`;
  const urlsForecast = `${forecastURL}?q=${value}&appid=${apiKey}&units=metric`;

  const data = getData(urls);
  data.then((result) => {
    setfeelsLike(result.feelsLike);
    setTemperature(result.temperature);
    setImage(result.image);
    setWeather(result.weather);
    setSunrice(result.sunrice);
    setSunset(result.sunset);
  });

  const forecast = getForecast(urlsForecast);
  forecast.then((result) => {
    setFuture(result);
  });

  return (
    <div className="App">
      <Search getValue={trackInput} />
      <div className="main__block">
        <Tabs 
        nameCity={value} 
        display={display} 
        setValue = {setValue}
        temperature = {temperature} 
        image = {image}
        feelsLike = {feelsLike}
        weather = {weather}
        sunrice = {sunrice}
        sunset = {sunset}
        favoriteCity = {favoriteCity}
        future = {future}
        setFavoriteCity = {setFavoriteCity}
        />
        <div className="left__block-bottom">
        <button onClick={() => displayTab('tab-1')}>Now</button>
        <button onClick={() => displayTab('tab-2')}>Details</button>
        <button onClick={() => displayTab('tab-3')}>Forecast</button>
      </div>
      </div>
    </div>
  );
}

export default App;
