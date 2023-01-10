import React from 'react';
import Details from '../Details';
import Forecast from '../Forecast';
import Now from '../Now';
import classes from './index.module.css';

const WeatherContent = (props) => {
  const {
    activeTab,
    className,
    weather,
    forecast,
    addedCities,
    addCity,
    deleteCity
  } = props;

  const tabsContent = {
    now: <Now
            info={weather}
            addedCities={addedCities}
            addCity={addCity}
            deleteCity = {deleteCity}
          />,
    details: <Details info={weather} />,
    forecast: <Forecast info={forecast} />
  };

  return (
    <div className={`${className} ${classes.contentWrapper}`}>
      {tabsContent[activeTab.value]}
    </div>
  );
};

export default WeatherContent;
