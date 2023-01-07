import './tabs.css';
import { useState } from 'react';
import { Review } from '../review/review';
import { Details } from '../details/details';
import { Forecast } from '../forecast/forecast';

export function Tabs() {
	const [activeTab, setActiveTab] = useState(1);

	const tabs = [
		{
			name: 'Now',
			content: <Review />,
			id: 1
		},
		{
			name: 'Details',
			content: <Details />,
			id: 2
		},
		{
			name: 'Forecast',
			content: <Forecast />,
			id: 3
		}
	]

	function handleClick(i) {
		setActiveTab(i);
	}

	function getClassName(className, activeClassName, id) {
		return activeTab === id ? `${className} ${activeClassName}` : className;
	}

	return (
		<div className="tabs">
			<div className="tabs__content">
				{tabs.map(({ content, id }) => {
					const className = getClassName("tabs__item", "tabs__item--active", id);

					return (
						<div key={id} className={className}>
							{content}
						</div>
					);
				})}
			</div>
			<div className="tabs__controls">
				{tabs.map(({ name, id }) => {
					const className = getClassName("tabs__button", "tabs__button--active", id);

					return (
						<button
							key={id}
							onClick={() => handleClick(id)}
							className={className}
							type="button">
							{name}
						</button>
					);
				})}
			</div>
		</div>
	);
}