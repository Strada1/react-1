import { useState } from 'react';

import deleteIcon from '../assets/delete.png';
import checkIcon from '../assets/done.svg';

export default function NewTask({ tasks, setTasks, title, id, completed, onClickDelete }) {
	const [checked, setChecked] = useState(completed);

	const onClickChecked = id => {
		const checkedTasks = tasks.map(task => {
			if (task.id === id) {
				if (!checked) {
					setChecked(true);
					task.completed = true;
					task.progress = 'DONE';
				} else {
					setChecked(false);
					task.completed = false;
					task.progress = 'In Progress';
				}
			}
			return task;
		});

		return setTasks(checkedTasks);
	};

	return (
		<li className="item">
			<label className="item-label">
				<div onClick={() => onClickChecked(id)} className={checked ? 'checked' : 'check'}>
					<img src={checked ? checkIcon : ''} />
				</div>
				<span className="item-text">{title}</span>
				<button className="delete">
					<img
						onClick={() => onClickDelete(id)}
						width={25}
						height={25}
						src={deleteIcon}
						alt="Delete"
					/>
				</button>
			</label>
		</li>
	);
}
