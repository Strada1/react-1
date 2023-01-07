import React, { useState } from "react";
import "../App/App.css";
import Details from "../Details/Details";
import Forecast from "../Forecast/Forecast";
import Location from "../Location/Location";
import Now from "../Now/Now";
import Search from "../Search/Search";
import Tabs from "../Tabs/Tabs";
import "../../node_modules/normalize.css";
import Context from "../Context";
import { useEffect } from "react";

const tabs = [
  { title: "now", active: true, component: <Now key="1" /> },
  { title: "details", active: false, component: <Details key="2" /> },
  { title: "forecast", active: false, component: <Forecast key="3" /> },
];
function sunsetDate(dateValue) {
  dateValue = new Date(dateValue * 1000);
  return dateValue.toLocaleTimeString();
}

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "54bfa629cf00fc9cee8f1200a182a38c";
function request(city, resultValue) {
  let url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      resultValue({
        city: result.name,
        temp: result.main.temp,
        feelsLike: result.main.feels_like,
        weather: result.weather[0].main,
        sunrise: result.sys.sunrise,
        sunset: result.sys.sunset,
        icon: result.weather[0].icon,
        date: result.dt,
      });
    })
    .catch((err) => alert(err));
}
function App() {
  const [active, setActive] = useState(tabs);
  const [result, setResult] = useState({});
  const [favoritesList, setFavoritesList] = useState([]);
  useEffect(() => {
    let localTown = localStorage.getItem("town");
    if (localTown) {
      request(localTown, setResult);
    } else {
      request("moscow", setResult);
    }
  }, []);
  useEffect(() => {
    let localTown = localStorage.getItem("listItems");
    if (localTown) {
      setFavoritesList(JSON.parse(localTown));
      console.log(localTown);
    }
  }, []);
  const contextValue = {
    result,
    setResult,
    request,
    sunsetDate,
    setFavoritesList,
    favoritesList,
  };
  return (
    <div>
      <Context.Provider value={contextValue}>
        <div className="weather__wrapper">
          <Search />
          <div className="weather__inner">
            <div className="weather__items--container">
              <div className="weather_items">
                {active.map((item) => (item.active ? item.component : null))}
              </div>
              <Tabs active={tabs} setActive={setActive} />
            </div>
            <Location />
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
