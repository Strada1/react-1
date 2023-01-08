import React, { useEffect, useState } from 'react';

import './App.css';
import SearchCity from './components/SearchCity';
import MainContainer from './components/MainContainer';

import { defaultValue } from './js/const';
import { getCityWeather, getCityForecast } from './js/fetch';

export const CurrentCityContext = React.createContext();
export const ForecastCityContext = React.createContext();

function App() {
	const [value, setValue] = useState(defaultValue);
	const [currentCity, setCurrentCity] = useState();
	const [forecast, setForecast] = useState();
	const [favoriteCities, setFavoriteCities] = useState([]);

	useEffect(() => {
		const favoriteList = JSON.parse(localStorage.getItem('favoriteCities'));
		const currentCity = JSON.parse(localStorage.getItem('currentCity'));

		if (currentCity) {
			setCurrentCity(currentCity);
			const resultForecast = getCityForecast(currentCity.name);

			resultForecast.then(obj => {
				setForecast(obj);
			});
		}

		if (favoriteList) {
			setFavoriteCities(favoriteList);
		}
	}, []);

	const createNewCity = evt => {
		evt.preventDefault();

		const result = getCityWeather(value);

		result.then(obj => {
			setCurrentCity(obj);
			localStorage.setItem('currentCity', JSON.stringify(obj));
		});

		const resultForecast = getCityForecast(currentCity.name);

		resultForecast.then(obj => {
			setForecast(obj);
		});

		setValue('');
	};

	const addToFavoriteCity = () => {
		setFavoriteCities([...favoriteCities, currentCity]);
		const favoriteList = [...favoriteCities, currentCity];
		console.log('favoriteList: ', favoriteList);
		localStorage.setItem('favoriteCities', JSON.stringify(favoriteList));
	};

	const deleteFavoriteCity = id => {
		const result = favoriteCities.filter(city => city.id !== id);
		localStorage.setItem('favoriteCities', JSON.stringify(result));

		return setFavoriteCities(result);
	};

	const showCurrentCityDetails = id => {
		const result = favoriteCities.filter(city => city.id === id);
		const resultForecast = getCityForecast(result[0].name);

		setCurrentCity(result[0]);
		resultForecast.then(obj => setForecast(obj));
	};

	return (
		<div className="wrapper">
			<SearchCity value={value} setValue={setValue} submit={createNewCity} />
			<CurrentCityContext.Provider value={currentCity}>
				<ForecastCityContext.Provider value={forecast}>
					<MainContainer
						forecastCity={forecast}
						favoriteCities={favoriteCities}
						addToFavoriteCity={addToFavoriteCity}
						deleteFavoriteCity={deleteFavoriteCity}
						showCurrentCityDetails={showCurrentCityDetails}
					/>
				</ForecastCityContext.Provider>
			</CurrentCityContext.Provider>
		</div>
	);
}

export default App;
