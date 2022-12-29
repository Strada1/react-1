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
            <p>
              Temperature: <span>{typeof temperature === 'undefined' ? '--': temperature}</span>°
            </p>
            <p>
              Feels like: <span>{typeof feelsLike === 'undefined' ? '--': feelsLike}</span>°
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