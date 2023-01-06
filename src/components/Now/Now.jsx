import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import addFavorites from '../../resources/img/add-favorites.svg';
import './Now.sass';
import addFavoritesActive from '../../resources/img/add-favorites-active.svg';
import nowContext from '../../hooks/context';

function Now(props) {
  const context = useContext(nowContext);
  const { name, temperature, image } = context;
  const { addFavoriteCities, deleteFavoriteCities, favoriteCites } = props;

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
        <button
          type='button'
          onClick={imageAction}
          className='now__add-favorite'
        >
          <img alt='icon add favorites' src={imageAddFavorites} />
        </button>
      </div>
    </div>
  );
}

Now.propTypes = {
  addFavoriteCities: PropTypes.func.isRequired,
  deleteFavoriteCities: PropTypes.func.isRequired,
  favoriteCites: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Now;
