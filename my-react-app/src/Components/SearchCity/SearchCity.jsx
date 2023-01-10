import React, { useState } from 'react';

import './styleSearchCity.css';

function SearchCity(props) {
  const { setCity } = props;
  const [enteredCity, setEnteredCity] = useState('');

  const handleChangeCity = (event) => {
    setEnteredCity(event.target.value);
  };
  const handleSubmitCity = (event) => {
    event.preventDefault();
    setCity(enteredCity);
    setEnteredCity('');
  };
  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmitCity}>
        <input
          className="form__input"
          placeholder="Enter city"
          value={enteredCity}
          onChange={handleChangeCity}
        />
        <button
          aria-label="City search button"
          className="form__button"
          type="submit"
        />
      </form>
    </div>
  );
}

export default SearchCity;
