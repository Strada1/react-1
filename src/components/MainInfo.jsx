import React, { useState } from 'react';

import NowTab from './tabs/NowTab';
import DetailsTab from './tabs/DetailsTab';
import ForecastTab from './tabs/ForecastTab';
import Navigation from './Navigation';

export default function MainInfo({ addToFavoriteCity }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const changeTab = tabIndex => {
		if (tabIndex !== activeIndex) {
			setActiveIndex(tabIndex);
		}
	};

	return (
		<div className="main_weather">
			{activeIndex === 0 && <NowTab addToFavoriteCity={addToFavoriteCity} />}
			{activeIndex === 1 && <DetailsTab />}
			{activeIndex === 2 && <ForecastTab />}

			<Navigation activeIndex={activeIndex} changeTab={changeTab} />
		</div>
	);
}
