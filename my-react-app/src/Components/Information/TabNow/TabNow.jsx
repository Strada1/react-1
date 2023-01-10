import React, { useContext } from 'react';
import generateId from '../../../additional/generateId';
import listHasThisCity from '../../../additional/listHasThisCity';
import './styleTabNow.css';
import selectedCityContext from '../../App/selectedCityContext';

function TabNow(props) {
  const value = useContext(selectedCityContext);
  const { cityWeatherInfo, setSelectedCities } = props;
  const {
    main: { temp },
    name: nameCity,
    weather,
  } = cityWeatherInfo;
  const { icon } = weather[0];
  const srcIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  const handleChangeSelected = () => {
    if (listHasThisCity(value.selectedCities, nameCity)) {
      const copySelectedCities = [...value.selectedCities];
      const newSelectedCities = copySelectedCities.filter(
        (selectedCity) => selectedCity.nameCity !== nameCity
      );
      setSelectedCities(newSelectedCities);
    } else {
      setSelectedCities([
        ...value.selectedCities,
        { nameCity, id: generateId(value.selectedCities) },
      ]);
    }
  };
  const likeButtonClass = listHasThisCity(value.selectedCities, nameCity)
    ? 'tabNow__btn_liked'
    : '';

  return (
    <div className="tabNow">
      <div className="tabNow__temp">{Math.round(temp)}°</div>
      <div className="tabNow-container-img">
        <img className="tabNow__img" alt="weather" src={srcIcon} />
      </div>
      <div className="tabNow__city">{nameCity}</div>
      <button
        className={`tabNow__btn ${likeButtonClass}`}
        type="button"
        aria-label="Add city to favorites"
        onClick={handleChangeSelected}
      />
    </div>
  );
}

export default TabNow;
