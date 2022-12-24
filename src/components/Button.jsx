import React from 'react';

import addIcon from '../assets/add.svg';

export default function Button() {
	return (
		<button type="submit" className="new-task__button">
			<img src={addIcon} alt="Add" />
		</button>
	);
}
