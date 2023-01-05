import React, { useState, useEffect } from "react";
import Search from "./components/search";
import Tabs from "./components/tabs/tabs";
import "./app.css";
import { localstorageCity } from "./js/consts";

function App() {
  const [dataWeather, setdataWeather] = useState("");
  const [display, setDisplay] = useState("tab-1");
  const [favoriteCity, setFavoriteCity] = useState();
  const [future, setFuture] = useState([]);

  function displayTab(value) {
    setDisplay(value);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(localstorageCity));

    if (items) {
      setFavoriteCity(items);
    }
  }, []);

  return (
    <div className="App">
      <Search
        setdataWeather={setdataWeather}
        setFuture={setFuture}
        favoriteCity={favoriteCity}
      />
      <div className="main__block">
        <Tabs
          dataWeather={dataWeather}
          display={display}
          future={future}
          setFavoriteCity={setFavoriteCity}
          favoriteCity={favoriteCity}
          setdataWeather={setdataWeather}
          setFuture={setFuture}
        />
        <div className="left__block-bottom">
          <button onClick={() => displayTab("tab-1")}>Now</button>
          <button onClick={() => displayTab("tab-2")}>Details</button>
          <button onClick={() => displayTab("tab-3")}>Forecast</button>
        </div>
      </div>
    </div>
  );
}

export default App;
