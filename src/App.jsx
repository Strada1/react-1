import { useEffect, useState, useRef } from 'react';
import './App.css';

import { levelsPriority } from './const';
import Header from './components/Header';

function App() {
	const [tasks, setTasks] = useState([]);
	const [id, setId] = useState(0);
	const dataFetchedRef = useRef(false);

	useEffect(() => {
		const raw = localStorage.getItem('tasks');
		if (dataFetchedRef.current) return;
		dataFetchedRef.current = true;
		if (raw.length) {
			setTasks(JSON.parse(raw));
		}
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
