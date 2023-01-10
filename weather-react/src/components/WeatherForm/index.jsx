import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './index.module.css';

const DEFAULT_CITY_VALUE = '';

const WeatherForm = ({onSubmit}) => {
  const [city, setCity] = useState(DEFAULT_CITY_VALUE);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!city) {
      return null;
    }

    onSubmit(city);
    setCity(DEFAULT_CITY_VALUE);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value.trim());
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        className={classes.input}
        type="text"
        value={city}
        placeholder="Input a city name"
        onChange={handleCityChange}
      />
      <Button className={classes.button} type="submit" />
    </form>
  );
};

export default WeatherForm;
