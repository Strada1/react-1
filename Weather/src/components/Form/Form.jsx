import React from 'react';
import { useState } from 'react';

const defaultName = '';
const serverUrlWeather = 'http://api.openweathermap.org/data/2.5/weather';
const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

function Form({ setWeather, setForecast }) {
  const [name, setName] = useState(defaultName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name) return;
    const urlWeather = `${serverUrlWeather}?q=${name}&appid=${apiKey}`;
    const urlForecast = `${serverUrlForecast}?q=${name}&appid=${apiKey}`;

    const weather = await fetch(urlWeather).then((response) => response.json());
    const forecast = await fetch(urlForecast).then((response) => response.json());

    setWeather(weather);
    setForecast(forecast);

    console.log(forecast);
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input type="text" placeholder="Город" onChange={handleChange} />
      <button className="buttonSearch">
        <img src="/img/search.png" alt="Поиск" />
      </button>
    </form>
  );
}

export default Form;
