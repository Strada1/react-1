import React from 'react';

function ForecastItem() {
  return (
    <div className='forecast__box'>
      <div className='forecast__top'>
        <div className='forecast__date'>17 may</div>
        <div className='forecast__time'>12:00</div>
      </div>

      <div className='forecast__bottom'>
        <div className='forecast__wrapper'>
          <div className='forecast__temperature'>
            Temperature: <span>14</span>
          </div>
          <div className='forecast__feels-like'>
            Feels like <span>10</span>
          </div>
        </div>

        <div className='forecast__wrapper'>
          <div className='forecast__image-text'>Rain</div>
          <img alt='rain icon' src='' />
        </div>
      </div>
    </div>
  );
}

export default ForecastItem;
