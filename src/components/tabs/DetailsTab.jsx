import React from 'react';

import { calcTimeSun } from '../../js/helpers';
import { CurrentCityContext } from '../../App';

export default function DetailsTab() {
	return (
		<CurrentCityContext.Consumer>
			{currentCity => (
				<div className="main_weather__city-details ">
					<div className="city_details">
						<h2 className="header_details">{currentCity.name}</h2>
					</div>
					<ul className="list-details">
						<li className="list_item__temprature">Temprature: {currentCity.main.temp}&deg;</li>
						<li className="list_item__feels">Feels like: {currentCity.main.feels_like}&deg;</li>
						<li className="list_item__weather">Weather: {currentCity.weather[0].main}</li>
						<li className="list_item__sunrise"> Sunrise: {calcTimeSun(currentCity.sys.sunrise)}</li>
						<li className="list_item__sunset">Sunset: {calcTimeSun(currentCity.sys.sunset)}</li>
					</ul>
				</div>
			)}
		</CurrentCityContext.Consumer>
	);
}
