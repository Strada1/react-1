import './common.css';
import './app.css';
import { useEffect, useState } from 'react';
import { SearchForm } from './components/searchForm/searchForm';
import { Locations } from './components/locations/locations';
import { Tabs } from './components/tabs/tabs';
import { getWeather } from './services/getWeather';
import { INITIAL_CITY, CITIES } from './const';
import { getStorageItem, setStorageItem } from './localStorage';
import { WeatherContext } from './context/weatherContext';
import { CitiesContext } from './context/citiesContext';
import { Spiner } from './components/spiner';

export function App() {
	const [weather, setWeather] = useState();
	const [cities, setCities] = useState([]);

	useEffect(() => {
		updateWeather(INITIAL_CITY);
	}, []);

	useEffect(() => {
		const cities = getStorageItem(CITIES);

		if (cities) {
			setCities(cities);
		}
	}, []);

	function updateWeather(cityName) {
		getWeather(cityName)
			.then(([weather, forecast]) => {
				setWeather({
					current: weather,
					forecast
				});
			});
	}

	function removeCity(cityName) {
		const citiesList = cities.filter((city) => {
			if (city !== cityName) return city;
		});

		setCities(citiesList);
		setStorageItem(CITIES, citiesList);
	}

	function saveCity(city) {
		const isCityInList = cities.includes(city);

		if (isCityInList) return;

		setCities([...cities, city]);
		setStorageItem(CITIES, [...cities, city]);
	}

	return (
		<WeatherContext.Provider value={{weather, updateWeather}}>
			<CitiesContext.Provider value={{cities, removeCity, saveCity }}>
				<div className="app">
					<div className="app__header">
						<SearchForm updateWeather={updateWeather} />
					</div>
					<main className="app__content">
						<div className="app__column">
							{weather ? <Tabs /> : <Spiner />}
						</div>
						<div className="app__column">
							<Locations />
						</div>
					</main>
				</div>
			</CitiesContext.Provider>
		</WeatherContext.Provider>
	);
}
