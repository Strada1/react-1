import React from 'react';
import Weather from '../../API/Weather';
import classes from './index.module.css';

const Now = (props) => {
  const {
    info,
    addedCities,
    addCity,
    deleteCity
  } = props;

  if (!info) {
    return null;
  }

  const weather = new Weather(info);
  const isAdded = !!addedCities.find((addedCity) => addedCity.name === weather.name);
  const addButtonClass = isAdded
    ? `${classes.addButton} ${classes.isAdded}`
    : classes.addButton;

  const handleClickButton = () => {
    const city = {id: info.id, name: weather.name};

    if (isAdded) {
      deleteCity(city);
      return;
    }
    addCity(city);
  };

  return (
    <article className={classes.mainWrapper}>
      <p className={classes.temperature}>
        {weather.temperature}&#176;
      </p>

      <img
        className={classes.image}
        src={weather.iconSource}
        width="100"
        alt="{weather.description}"
      />

      <footer className={classes.footer}>
        <h2 className={classes.title}>
          {weather.name}
        </h2>

        <button
          className={addButtonClass}
          type="button"
          title="Add to favourite"
          onClick={handleClickButton}
        >
          <svg className={classes.icon} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Add to favourite.">
            <path opacity="1" fillRule="evenodd" clipRule="evenodd" d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z" stroke="#39b54a" strokeWidth="2"/>
          </svg>
        </button>
      </footer>
    </article>
  );
};

export default Now;
