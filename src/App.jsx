import React, { useState, useEffect } from "react";
import { Forecast } from "./WeatherTab/TabForecast";
import { Headers } from "./Headers/Headers";
import { WeatherNow } from "./WeatherTab/TabNow";
import { Details } from "./WeatherTab/TabDetails";
import { Navigation } from "./WeatherTab/Navigation";
import { ListCityes } from "./City/ListCityes";
import { serverUrl, apiKey, serverUrlForecast } from "./const";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import { setStorage } from "./localStorage";

function App() {
  const defaultValue = "";
  const [input, setInput] = useState(defaultValue);
  const [weatherForecast, setWeatherForecast] = useState(defaultValue);
  const [city, setCity] = useState(defaultValue);
  const [likedCity, setLikedCity] = useState([]);

  useEffect(() => {
    if (city === defaultValue) {
      request("Moscow");
    }
  }, []);

  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem("likedCity"));
    if (cities) {
      setLikedCity(cities);
    }
  }, []);

  function defaultForecast(event) {
    event.preventDefault();
    request(input);
  }

  async function request(name) {
    try {
      const url = `${serverUrl}?q=${name}&appid=${apiKey}&units=metric`;
      const urlForecast = `${serverUrlForecast}?q=${name}&appid=${apiKey}&units=metric`;
      const reqWeather = await fetch(url);
      const resultWeather = await reqWeather.json();

      const reqForecast = await fetch(urlForecast);
      const resulForecast = await reqForecast.json();

      if (resultWeather.cod !== 200) {
        alert(resultWeather.message);
      } else {
        forecast(
          resulForecast.city.name,
          resulForecast.list[4],
          resulForecast.list[5],
          resulForecast.list[6]
        );
        weather(resultWeather);
      }
    } catch (eror) {
      console.log(eror);
    }
  }

  function weather(item) {
    setCity({
      id: nanoid(),
      name: item.name,
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
      feelLike: Math.round(item.main.feels_like),
      weather: item.weather[0].main,
      sunrise: format(new Date(item.sys.sunrise), "p"),
      sunset: format(new Date(item.sys.sunset), "p"),
    });
    setStorage("weather", city);
  }

  function forecast(city, weather12am, weather15pm, weather18pm) {
    setWeatherForecast([
      {
        id: nanoid(),
        name: city,
        temp: Math.round(weather12am.main.temp),
        icon: weather12am.weather[0].icon,
        feelLike: Math.round(weather12am.main.feels_like),
        weather: weather12am.weather[0].main,
        date: format(new Date(weather12am.dt_txt), "d MMMM"),
        time: format(new Date(weather12am.dt_txt), "p"),
      },
      {
        id: nanoid(),
        name: city,
        temp: Math.round(weather15pm.main.temp),
        icon: weather15pm.weather[0].icon,
        feelLike: Math.round(weather15pm.main.feels_like),
        weather: weather15pm.weather[0].main,
        date: format(new Date(weather15pm.dt_txt), "d MMMM"),
        time: format(new Date(weather15pm.dt_txt), "p"),
      },
      {
        id: nanoid(),
        name: city,
        temp: Math.round(weather18pm.main.temp),
        icon: weather18pm.weather[0].icon,
        feelLike: Math.round(weather18pm.main.feels_like),
        weather: weather18pm.weather[0].main,
        date: format(new Date(weather18pm.dt_txt), "d MMMM"),
        time: format(new Date(weather18pm.dt_txt), "p"),
      },
    ]);
    setStorage("forecast", weatherForecast);
  }

  function addCity() {
    console.log(likedCity);
    let checkLikedCity;
    likedCity.forEach((item) => {
      if (item.name === city.name) {
        checkLikedCity = true;
      } else {
        checkLikedCity = false;
      }
    });

    if (checkLikedCity === true) {
      alert("This city is already in the favorites");
    } else {
      setLikedCity([
        ...likedCity,
        {
          id: nanoid(),
          name: city.name,
        },
      ]);
      setStorage("likedCity", likedCity);
    }
  }

  function deleteCity(city) {
    setLikedCity([...likedCity].filter((item) => city !== item.name));
  }

  return (
    <div className="container">
      <div className="content">
        <Headers value={input} input={(event) => {setInput(event.target.value)}} form={defaultForecast} />
        <div className="forecast-container">
          <section className="main-forecast">
            <WeatherNow city={city} addCity={addCity} />
            <Details city={city} />
            {weatherForecast === defaultValue ? null : (
              <Forecast forecast={weatherForecast} />
            )}
            <Navigation />
          </section>
          <ListCityes
            likedCity={likedCity}
            deleteCity={deleteCity}
            request={request}
          />
        </div>
      </div>
    </div>
  );
}

export { App };
