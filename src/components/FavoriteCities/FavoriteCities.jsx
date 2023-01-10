import React from 'react';
import './FavoriteCities.sass';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoriteCities(props) {
  const { favoriteCites, deleteFavoriteCities, onRequest } = props;

  return (
    <div className='weather__favorites favorites'>
      <div className='favorites__title'>
        <span> Added Locations</span>
      </div>
      <div className='favorites__list-wrapper'>
        <ul className='favorites__list'>
          {[...favoriteCites].map((name) => (
            <FavoriteItem
              onRequest={() => onRequest(name)}
              key={uuidv4()}
              cityName={name}
              deleteCity={() => deleteFavoriteCities(name)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

FavoriteCities.propTypes = {
  deleteFavoriteCities: PropTypes.func.isRequired,
  onRequest: PropTypes.func.isRequired,
  favoriteCites: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default FavoriteCities;
