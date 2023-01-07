import { useState } from 'react';
import {
  checkDupcicateCity, deleteCity, getCityList, saveCityList,
} from '../../storage';
import './Now.css';

const buttonClasses = {
  default: 'tab__block-button',
  active: 'tab__block-button tab__block-button--active',
};

function Now({ weather, setCityList }) {
  const [buttonClass, setButtonClass] = useState(buttonClasses.default);

  function handleClick() {
    const cityList = getCityList();
    let newCityList;
    if (checkDupcicateCity(weather.city, cityList)) {
      newCityList = deleteCity(weather.city, cityList, setCityList);
    } else if (cityList) {
      newCityList = [...cityList, weather.city];
    } else {
      newCityList = [weather.city];
    }
    saveCityList(newCityList);
    setCityList(newCityList);
  }

  return (
    <div className="tab__block">
      <div className="tab__block-top">
        {weather.temp}
        ºC
      </div>
      <img src={weather.icon} alt="icon" className="tab__image" />
      <div className="tab__block-bottom">
        <h3 className="tab__block-title">
          {weather.city}
        </h3>
        <button className={buttonClass} type="button" onClick={handleClick}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export { Now };
