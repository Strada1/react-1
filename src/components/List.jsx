import NewTask from './NewTask';

export default function List({ tasks, priority, setTasks }) {
	const highPriority = tasks.filter(task => task.priority === 'HIGH');
	const lowPriority = tasks.filter(task => task.priority === 'LOW');

	const onClickDelete = id => {
		return setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<ul className={'todo-list'}>
			{priority === 'HIGH'
				? highPriority.map(task => {
						return (
							<NewTask
								key={task.id}
								{...task}
								tasks={tasks}
								setTasks={setTasks}
								onClickDelete={onClickDelete}
							/>
						);
				  })
				: lowPriority.map(task => {
						return <NewTask key={task.id} {...task} onClickDelete={onClickDelete} />;
				  })}
		</ul>
	);
}
