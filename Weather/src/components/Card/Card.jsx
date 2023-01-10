import React from 'react';
import { useContext } from 'react';
import iconContext from '../../context';

const optionsTime = { hour: 'numeric', minute: 'numeric' };
const optionsDate = { month: 'long', day: 'numeric' };

function Card({ list, city }) {
  const icon = useContext(iconContext);

  return list.map((forecard, index) => {
    const deg = Math.floor(forecard.main.temp - 273.15) + '°';
    const degFeels = Math.floor(forecard.main.feels_like - 273.15) + '°';
    const description =
      forecard.weather[0].description[0].toLowerCase() + forecard.weather[0].description.slice(1);

    const dateForecast = new Date(
      forecard.dt * 1000 + new Date(Date.now()).getTimezoneOffset() * 60000 + city.timezone * 1000,
    );

    const time = dateForecast.toLocaleTimeString(['en-Gb'], optionsTime);
    const date = dateForecast.toLocaleDateString(['en-Gb'], optionsDate);

    return (
      <div className="card" key={index}>
        <div className="date">
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <div className="details">
          <ul>
            <li className="detail">Temperature: {deg}</li>
            <li className="detail">Feels like: {degFeels}</li>
          </ul>
          <div>
            <h1>Clouds</h1>
            <img src={'/img/' + icon(description)} alt={description} />
          </div>
        </div>
      </div>
    );
  });
}

export default Card;
