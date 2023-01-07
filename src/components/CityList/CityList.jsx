import { useState } from 'react';
import { getCityList } from '../../storage';
import { CityListItem } from '../CityListItem/CityListItem';
import './CityList.css';

function CityList({ setCity, cityList, setCityList }) {
  return (
    <>
      <div className="weather__block-header">
        Added Locations:
      </div>
      <ul className="weather__block-list">
        {cityList && cityList.map((city) => <CityListItem cityName={city} key={city} setCity={setCity} cityList={cityList} setCityList={setCityList} />)}
      </ul>
    </>
  );
}

export { CityList };
