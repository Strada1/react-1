import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../resources/img/search-icon.svg';
import './SearchCityForm.sass';

const defaultInputValue = '';
function SearchCityForm(props) {
  const [searchCity, setSearchCity] = useState(defaultInputValue);
  const { onRequest } = props;
  const clearingInputValue = () => {
    setSearchCity(defaultInputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onRequest(searchCity);
    clearingInputValue();
  };
  const onChangeInput = (event) => {
    setSearchCity(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className='weather__form'>
      <input
        onChange={onChangeInput}
        value={searchCity}
        className='weather__input'
        placeholder='enter the city'
        type='text'
      />
      <button type='submit' className='weather__button'>
        <img alt='search-icon' src={searchIcon} />
      </button>
    </form>
  );
}

SearchCityForm.propTypes = {
  onRequest: PropTypes.func.isRequired,
};

export default SearchCityForm;
