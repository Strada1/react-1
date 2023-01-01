import React from 'react';
import Button from '../UI/Button';
import classes from './index.module.css';

const AddedCity = (props) => {
  const {
    city,
    className,
    deleteCity,
    chooseCity
  } = props;

  const handleDeleteCity = () => {
    deleteCity(city);
  };

  const handleChooseCity = (event) => {
    event.preventDefault();
    chooseCity(city.name);
  };

  return (
    <li className={`${className} ${classes.cityItem}`}>
      <a
        className={classes.cityLink}
        href="#"
        onClick={handleChooseCity}
      >
        {city.name}
      </a>
      <Button
        className={classes.deleteButton}
        type="button"
        onClick={handleDeleteCity}/>
    </li>
  );
};

export default AddedCity;
