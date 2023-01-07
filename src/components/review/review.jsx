import './review.css';
import { Temperature } from "../temperature/temperature";
import { HeartButton } from '../heartButton/heartButton';
import { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';

export function Review() {
	const { weather } = useContext(WeatherContext);
	const { temp, iconURL, city } = weather.current;

	return (
		<div className="weather-review">
			<Temperature size="lg" temperature={temp} />
			<div className="weather-review__icon">
				<img src={iconURL} alt="" />
			</div>
			<div className="weather-review__box">
				<div className="weather-review__city">
					{city}
				</div>
				<HeartButton />
			</div>
		</div>
	);
}