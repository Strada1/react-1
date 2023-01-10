import './TimeLineItem.css'

const TimeLineItem = ({day, month, time, temperature, feelsLike, weather, icon}) => {
    return (
      <div className="table-container">
        <div className="forecast-date">
          <p>
            <span>{day || '--'}</span> <span>{month || '--'}</span>
          </p>
          <p>{time || '--'}</p>
        </div>
        <div className="forecast-weather">
          <div>
            <div className='temperature-wrapper'>
            <img className='temperature-img' src="./temperature.svg" alt="" />
            <span>{typeof temperature === 'undefined' ? '--': temperature}</span>°
            </div>
            <p className='feels-like'>
              Like: <span>{typeof feelsLike === 'undefined' ? '--': feelsLike}</span>°
            </p>
          </div>
          <div className="weather-icon">
            <p className="rain">{weather || '--'}</p>
            <img className="forecast-icons" src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : "./rain.svg" }/>
          </div>
        </div>
      </div>
    );
  };

  export {TimeLineItem}