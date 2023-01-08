import React from 'react';

import ForecastCard from './ForecastCard';

export default function ForecastList({ cityList }) {
	return (
		// <ForecastCityContext.Consumer>
		// {value => (
		<ul className="forecast_list">
			{console.log(cityList)}
			{cityList.map(item => (
				<ForecastCard key={item.dt} city={item} />
			))}
		</ul>
		// )}
		// </ForecastCityContext.Consumer>
	);
}
