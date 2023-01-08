import React from 'react';

import CityList from './CityList';
import MainInfo from './MainInfo';

export default function MainContainer({
	forecastCity,
	favoriteCities,
	addToFavoriteCity,
	deleteFavoriteCity,
	showCurrentCityDetails,
}) {
	return (
		<div className="container">
			<MainInfo addToFavoriteCity={addToFavoriteCity} />
			<CityList
				favoriteCities={favoriteCities}
				deleteFavoriteCity={deleteFavoriteCity}
				showCurrentCityDetails={showCurrentCityDetails}
			/>
		</div>
	);
}
