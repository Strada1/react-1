import React, { useState } from 'react';
import searchImg from '../assets/search.svg';

export function Form({ addRequest }) {
  const [cityInput, setCityInput] = useState('');
  const resetForm = (e) => {
    e.preventDefault();
  };

  const getCityNameHandler = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <form onSubmit={resetForm}>
      <input
        type="text"
        className="input_User"
        value={cityInput}
        onChange={getCityNameHandler}
      />
      <button
        className="search-btn"
        type="submit"
        onClick={() => addRequest(cityInput)}
      >
        <img src={searchImg} alt="" />
      </button>
    </form>
  );
}
