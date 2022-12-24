import { useState } from 'react';

import CreateTask from './CreateTask';
import List from './List';

export default function Header({ priority, tasks, id, setTasks, setId }) {
	const [value, setValue] = useState('');

	const onClickSubmit = evt => {
		evt.preventDefault();

		setId(prev => prev + 1);
		setTasks([
			...tasks,
			{
				id: id,
				title: value,
				priority: priority,
				progress: 'In Progress',
				completed: false,
			},
		]);
		setValue('');
	};

	return (
		<>
			<h1>{priority}</h1>
			<CreateTask value={value} setValue={setValue} submit={onClickSubmit} priority={priority} />
			<List tasks={tasks} priority={priority} id={id} setTasks={setTasks} />
		</>
	);
}
