import React from 'react';

import { getConvertDate, calcTime } from '../js/date';

export default function ForecastCard({ city }) {
	return (
		<li className="forecast_item">
			<div className="forecast_date">
				<p className="forecast_date__day">{getConvertDate(city.dt)}</p>
				<p className="forecast_date__time">{calcTime(city.dt)}</p>
			</div>
			<div className="forecast_detail">
				<div className="forecast_details">
					<p className="forecast_details__temperature">Temprature: {city.main.temp}&deg;</p>
					<p className="forecast_details__feels">Feels Like: {city.main.feels_like}&deg;</p>
				</div>
				<div className="forecast_icon">
					<p>{city.weather[0].main}</p>
					<img
						width={31}
						height={31}
						src={'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png'}
						alt="Rain"
					/>
				</div>
			</div>
		</li>
	);
}
