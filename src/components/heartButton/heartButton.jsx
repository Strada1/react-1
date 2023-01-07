import './heartButton.css';
import heart from '../../assets/heart.svg';
import { useContext } from 'react';
import { CitiesContext } from '../../context/citiesContext';
import { WeatherContext } from '../../context/weatherContext';

export function HeartButton() {
	const { saveCity } = useContext(CitiesContext);
	const { weather: { current: { city } } } = useContext(WeatherContext);

	return (
		<button
			onClick={() => saveCity(city)}
			className="heart-button"
			type="button"
		>
			<img src={heart} alt="" />
		</button>
	);
}