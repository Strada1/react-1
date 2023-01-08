import React from 'react';

import cloudIcon from '../../assets/img/cloud.png';
import { CurrentCityContext } from '../../App';

export default function NowTab({ currentCity, addToFavoriteCity }) {
	return (
		<CurrentCityContext.Consumer>
			{value => (
				<div className="main_weather__city-now ">
					<h1 className="temperature">{value !== undefined ? value.main.temp + '°C' : '12°C'}</h1>
					<div className="image_cloud">
						<img
							className="cloud"
							src={
								value !== undefined
									? 'http://openweathermap.org/img/wn/' + value.weather[0].icon + '@2x.png'
									: cloudIcon
							}
							alt="Cloud"
						/>
					</div>
					<div className="favorite">
						<p className="name_city">{value !== undefined ? value.name : 'Sochi'}</p>
						<svg
							onClick={addToFavoriteCity}
							className="favorite_btn"
							width="22"
							height="22"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.54"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
								stroke="black"
								strokeWidth="2"
							/>
						</svg>
					</div>
				</div>
			)}
		</CurrentCityContext.Consumer>
	);
}
