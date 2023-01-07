import './citiesList.css';
import { useContext } from 'react';
import { CitiesContext } from '../../context/citiesContext';
import { WeatherContext } from '../../context/weatherContext';

export function CitiesList() {
	const { cities, removeCity } = useContext(CitiesContext);
	const { updateWeather } = useContext(WeatherContext);

	if (!cities) return null;

	return (
		<ul className="cities-list">
			{cities.map((city) =>
				<li key={city} className="cities-list__item">
					<button
						onClick={() => updateWeather(city)}
						type="button">
						{city}
					</button>
					<button
						onClick={() => removeCity(city)}
						type="button">
						&#10006;
					</button>
				</li>
			)}
		</ul>
	);
}