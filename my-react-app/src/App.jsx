import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Widgets } from './components/Widgets';
import { ChooseSection } from './components/ChooseSection';
import { Details } from './components/Details';
import { CityList } from './components/CityList';
import { Forecast } from './components/Forecast';
import { requestCity } from './components/methodsJs/requestCity';
import { ELEMENT } from './components/methodsJs/elements';
import { convertTime } from './components/methodsJs/converterTime';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from './components/methodsJs/LocalSet';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [cityNow, setCityNow] = useState(ELEMENT.defaultValue);
  const [citiesFavorite, setCitiesFavorite] = useState([]);

  useEffect(() => {
    if (getLocalStorageItem('currentCity')) {
      setCitiesFavorite(
        getLocalStorageItem(ELEMENT.selectedCities)
          ? getLocalStorageItem(ELEMENT.selectedCities)
          : []
      );
      addRequest(getLocalStorageItem('currentCity')?.cityName);
    } else {
      addRequest(ELEMENT.defaultValue);
    }
  }, []);

  const AddCityHandler = (value) => {
    setCityNow(value);
    setLocalStorageItem('currentCity', value);
  };

  const addCityFavorite = () => {
    const index = citiesFavorite.findIndex(
      (item) => item.cityName === cityNow.cityName
    );
    if (index === -1) {
      setCitiesFavorite((prev) => [...prev, cityNow]);
      setLocalStorageItem(ELEMENT.selectedCities, [...citiesFavorite, cityNow]);
    } else {
      console.log('Такая задача уже существует');
    }
  };

  const addRequest = (value) => {
    const gg = requestCity(value);
    gg.then((data) => {
      AddCityHandler({
        cityName: data.name,
        cityTemp: data.main.temp,
        weatherIcon: data.weather[0].icon,
        tempFeelsLike: data.main.feels_like,
        weathetMain: data.weather[0].main,
        sunrise: convertTime(data.sys.sunrise),
        sunset: convertTime(data.sys.sunset),
        id: nanoid(),
      });
    }).catch((e) => console.log('Город не найден'));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="weather">
          <Form AddCityHandler={AddCityHandler} addRequest={addRequest} />
          <div className="weather_wrapper">
            <div className="weather_widgets">
              <Widgets
                cityName={cityNow?.cityName}
                cityTemp={cityNow?.cityTemp}
                weatherIcon={cityNow?.weatherIcon}
                addCityFavorite={addCityFavorite}
              />
              <Details
                cityName={cityNow?.cityName}
                tempFeelsLike={cityNow?.tempFeelsLike}
                cityTemp={cityNow?.cityTemp}
                weathetMain={cityNow?.weathetMain}
                sunset={cityNow?.sunset}
                sunrise={cityNow?.sunrise}
              />
              <Forecast cityName={cityNow?.cityName} />
              <ChooseSection />
            </div>
            <CityList
              addRequest={addRequest}
              citiesFavorite={citiesFavorite}
              setCitiesFavorite={setCitiesFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
