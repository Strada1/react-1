import './ForecastItem.css';

function ForecastItem({ weather }) {
  return (
    <li className="forecast__item">
      <div className="forecast__item-section">
        <p className="forecast__item-text">
          {weather.date}
        </p>
        <p className="forecast__item-text">
          {weather.time}
        </p>
      </div>
      <div className="forecast__item-section">
        <div className="forecast__item-block">
          <p className="forecast__item-text">
            Temperature:
            {' '}
            {weather.temp}
            ºC
          </p>
          <p className="forecast__item-text">
            Feels like:
            {' '}
            {weather.feels}
            ºC
          </p>
        </div>
        <div className="forecast__item-block">
          <p className="forecast__item-text">
            {weather.weather}
          </p>
          <img src={weather.icon} alt="img" className="forecast__item-img" />
        </div>
      </div>
    </li>
  );
}

export { ForecastItem };
