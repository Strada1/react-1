import './Details.css';

function Details({ weather }) {
  return (
    <div className="tab__block">
      <h3 className="tab__block-title">
        {weather.city}
      </h3>
      <ul className="tab__block-list">
        <li className="tab__list-item">
          Temperature:
          {' '}
          {weather.temp}
          ºC
        </li>
        <li className="tab__list-item">
          Feels like:
          {' '}
          {weather.feels}
          ºC
        </li>
        <li className="tab__list-item">
          Weather:
          {' '}
          {weather.weather}
        </li>
        <li className="tab__list-item">
          Sunrise:
          {' '}
          {weather.sunrise}
        </li>
        <li className="tab__list-item">
          Sunset:
          {' '}
          {weather.sunset}
        </li>
      </ul>
    </div>
  );
}

export { Details };
