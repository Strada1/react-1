import React, { useState } from 'react';

import CreateTask from './CreateTask';
import NewTask from './NewTask';

export default function PriorityForm() {
	const [isHigh, setIsHigh] = useState(true);

	return (
		<>
			<h1>HIGH</h1>
			<CreateTask setPriority={setIsHigh} />
			<ul className="todo-list">
				<NewTask />
			</ul>

			<h1>LOW</h1>
			<CreateTask />
			<ul className="todo-list low-list"></ul>
		</>
	);
}
