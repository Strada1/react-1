import { useEffect, useState } from 'react';
import './App.css';

import { levelsPriority } from './const';
import Header from './components/Header';

function App() {
	const [tasks, setTasks] = useState([]);
	const [id, setId] = useState(0);

	useEffect(() => {
		const raw = localStorage.getItem('tasks') || [];
		setTasks(JSON.parse(raw));
	}, []);

	useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

	return (
		<div className="container">
			{levelsPriority.map((item, index) => (
				<Header
					key={index}
					priority={item}
					tasks={tasks}
					id={id}
					setTasks={setTasks}
					setId={setId}
				/>
			))}
		</div>
	);
}

export default App;
