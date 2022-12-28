import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../resources/img/search-icon.svg';
import './SearchCityForm.sass';

function SearchCityForm(props) {
  const { inputValue, onChangeInput, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className='weather__form'>
      <input
        onChange={onChangeInput}
        value={inputValue}
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
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchCityForm;
