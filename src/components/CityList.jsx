import React from 'react';

import deleteIcon from '../assets/img/delete.png';

export default function CityList({ favoriteCities, deleteFavoriteCity, showCurrentCityDetails }) {
	return (
		<div className="location">
			<div className="header">
				<p className="header_text">Added Locations:</p>
			</div>
			<div className="added_cities">
				<ul className="favorites_cities">
					{favoriteCities.map((city, index) => (
						<li className="add__city" key={index} onClick={() => showCurrentCityDetails(city.id)}>
							{city.name}
							<img src={deleteIcon} alt="Delete" onClick={() => deleteFavoriteCity(city.id)} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
