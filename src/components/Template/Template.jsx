import React from 'react';
import arrow from '../../resources/img/arrow.svg';
import './Template.sass';

function Template() {
  return (
    <div className='template'>
      <div className='template__img'>
        <img src={arrow} alt='arrow' />
      </div>
      <div className='template__text'>write your city</div>
    </div>
  );
}

export default Template;
