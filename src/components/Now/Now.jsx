import React from 'react';
import PropTypes from 'prop-types';
import addFavorites from '../../resources/img/add-favorites.svg';
import './Now.sass';
import addFavoritesActive from '../../resources/img/add-favorites-active.svg';

function Now(props) {
  const {
    cityWeather: { name, temperature, image },
    addFavoriteCities,
    deleteFavoriteCities,
    favoriteCites,
  } = props;

  const imageAddFavorites = favoriteCites.has(name)
    ? addFavoritesActive
    : addFavorites;

  const imageAction = favoriteCites.has(name)
    ? () => deleteFavoriteCities(name)
    : () => addFavoriteCities(name);

  return (
    <div className='now'>
      <div className='now__top'>
        <div className='now__temperature'>{temperature}</div>
      </div>
      <div className='now__image'>
        <img alt='weather icon' src={image} />
      </div>
      <div className='now__button'>
        <div className='now__city'>{name}</div>
        <div className='now__add-favorite'>
          <img
            onClick={imageAction}
            alt='icon add favorites'
            src={imageAddFavorites}
          />
        </div>
      </div>
    </div>
  );
}

Now.propTypes = {
  cityWeather: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    temperature: PropTypes.string,
    feelsLike: PropTypes.number,
    weather: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  addFavoriteCities: PropTypes.func.isRequired,
  deleteFavoriteCities: PropTypes.func.isRequired,
  favoriteCites: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Now;
