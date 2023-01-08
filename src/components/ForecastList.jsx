import React from 'react';

import ForecastCard from './ForecastCard';

export default function ForecastList({ cityList }) {
	return (
		<ul className="forecast_list">
			{cityList.map(item => (
				<ForecastCard key={item.dt} city={item} />
			))}
		</ul>
	);
}
