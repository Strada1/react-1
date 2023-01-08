import React from 'react';

import ForecastList from '../ForecastList';
import { ForecastCityContext } from '../../App';

export default function ForecastTab() {
	return (
		<ForecastCityContext.Consumer>
			{forecastCity => (
				<div className="main_weather__city-forecast ">
					<div className="city_details">
						<p>{forecastCity.city.name}</p>
					</div>
					<ForecastList cityList={forecastCity.list} />
				</div>
			)}
		</ForecastCityContext.Consumer>
	);
}
