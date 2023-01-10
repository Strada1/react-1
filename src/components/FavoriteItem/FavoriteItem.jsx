import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../../resources/img/delete-icon.png';
import './FavoriteItem.sass';

function FavoriteItem(props) {
  const { cityName, deleteCity, onRequest } = props;
  return (
    <li>
      <button type='button' onClick={onRequest}>
        {cityName}
      </button>
      <img
        onClick={deleteCity}
        className='favorites__delete'
        alt='delete icon'
        src={deleteIcon}
      />
    </li>
  );
}

FavoriteItem.propTypes = {
  cityName: PropTypes.string.isRequired,
  deleteCity: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
};

export default FavoriteItem;
