import React from 'react';

import { TABS } from '../js/const';

export default function Navigation({ activeIndex, changeTab }) {
	return (
		<div className="main_weather__nav">
			{TABS.map((tab, index) => (
				<div
					key={index}
					className={
						activeIndex === index ? 'active nav_' + tab.toLowerCase() : 'nav_' + tab.toLowerCase()
					}
					onClick={() => changeTab(index)}>
					{tab}
				</div>
			))}
		</div>
	);
}
