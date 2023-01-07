import './forecast.css';
import { ForecastList } from '../forecastList/forecastList';
import { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';


export function Forecast() {
	const { weather: { current: { city } } } = useContext(WeatherContext);

	return (
		<div className="forecast">
			<h2 className="forecast__city">{city}</h2>
			<ForecastList />
		</div>
	)
}