import React from 'react';
import addFavorites from '../../resources/img/add-favorites.svg';
import './Now.sass';

function Now() {
  return (
    <div className='now'>
      <div className='now__top'>
        <div className='now__temperature'>14°</div>
        <div className='now__date'>
          <div className='now__date-day' />
          <div className='now__date-month' />
          <div className='now__date-time' />
        </div>
      </div>
      <div className='now__image'>
        <img alt='weather icon' src='' />
      </div>
      <div className='now__button'>
        <div className='now__city'>Kazan</div>
        <div className='now__add-favorite'>
          <img alt='icon add favorites' src={addFavorites} />
        </div>
      </div>
    </div>
  );
}

export default Now;
