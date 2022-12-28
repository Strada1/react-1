import React from 'react';
import './FavoriteCities.sass';

function FavoriteCities() {
  return (
    <div className='weather__favorites favorites'>
      <div className='favorites__title'>
        <span> Added Locations</span>
      </div>
      <div className='favorites__list-wrapper'>
        <ul className='favorites__list' />
      </div>
    </div>
  );
}

export default FavoriteCities;
