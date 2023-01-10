import { SERVER } from '../../const';
import { formatDate, formatTime } from '../../time';
import { ForecastItem } from '../ForecastItem/ForecastItem';
import './Forecast.css';

function Forecast({ weather }) {
  return (
    <div className="tab__block">
      <h3 className="tab__block-title">
        {weather.city}
      </h3>
      <ul className="forecast__list">
        {
        weather.list.map((weatherItem, index) => {
          formatDate(weatherItem.dt);
          const weatherObject = {
            date: formatDate(weatherItem.dt),
            time: formatTime(weatherItem.dt),
            temp: weatherItem.main.temp.toFixed(0),
            feels: weatherItem.main.feels_like.toFixed(0),
            weather: weatherItem.weather[0].main,
            icon: `${SERVER.IMG_URL}${weatherItem.weather[0].icon}@2x.png`,
          };
          return <ForecastItem weather={weatherObject} key={index} />;
        })
      }
      </ul>
    </div>
  );
}

export { Forecast };
