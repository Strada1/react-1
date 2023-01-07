import { deleteCity, saveCityList } from '../../storage';
import './CityListItem.css';

function CityListItem({
  cityName, setCity, cityList, setCityList,
}) {
  function handleClick() {
    setCity(cityName);
  }

  function handleButtonClick() {
    const newCityList = deleteCity(cityName, cityList, setCityList);
    saveCityList(newCityList);
    setCityList(newCityList);
  }

  return (
    <li className="weather__list-item">
      <h3 className="weather__list-item-title" onClick={handleClick}>
        {cityName}
      </h3>
      <button className="weather__list-item-button" onClick={handleButtonClick}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.94257 0.333292C1.49818 -0.111097 0.777682 -0.111097 0.333292 0.333292C-0.111097 0.777682 -0.111097 1.49818 0.333292 1.94257L9.39072 11L0.333292 20.0574C-0.111097 20.5018 -0.111097 21.2223 0.333292 21.6667C0.777682 22.1111 1.49818 22.1111 1.94257 21.6667L11 12.6093L20.0574 21.6667C20.5018 22.1111 21.2223 22.1111 21.6667 21.6667C22.1111 21.2223 22.1111 20.5018 21.6667 20.0574L12.6093 11L21.6667 1.94257C22.1111 1.49818 22.1111 0.777683 21.6667 0.333293C21.2223 -0.111097 20.5018 -0.111097 20.0574 0.333293L11 9.39072L1.94257 0.333292Z" fill="black" />
        </svg>
      </button>
    </li>
  );
}

export { CityListItem };
