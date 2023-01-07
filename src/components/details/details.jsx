import './details.css';
import { Temperature } from '../temperature/temperature';
import { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

export function Details() {
	const { weather } = useContext(WeatherContext);
	const {
		city,
		temp,
		feelsLikeTemp,
		weatherType,
		sunriseTime,
		sunsetTime
	} = weather.current;

	return (
		<div className="weather-details">
			<h2 className="weather-details__city">{city}</h2>
			<ul className="weather-details__list">
				<li className="weather-details__item">
					Temperature: <Temperature temperature={temp} />
				</li>
				<li className="weather-details__item">
					Feels like: <Temperature temperature={feelsLikeTemp} />
				</li>
				<li className="weather-details__item">
					Weather: {weatherType}
				</li>
				<li className="weather-details__item">
					Sunrise: {sunriseTime}
				</li>
				<li className="weather-details__item">
					Sunset: {sunsetTime}
				</li>
			</ul>
		</div>
	);
}