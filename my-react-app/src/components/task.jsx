import { useState } from 'react';
import './css/task.css';

function Task({ contentTask, task, setTask }) {
    const [checked, setChecked] = useState(false);

    const deleteTask = (event) => {
        const targetTask = event.target.previousSibling.textContent;
        setTask(task.filter((item) => item.task !== targetTask));
    };

    const changeStatus = () => {
        setChecked(!checked);
    };

    const statusTask = checked ? <div className="statusTask">Done</div> : null;

    return (
        <div className={checked ? 'task-checked' : 'task'}>
            <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                onChange={changeStatus}
            />
            <div className="element-task">
                {contentTask}
                {statusTask}
            </div>
            <button
                onClick={deleteTask}
                type="button"
                className="button-deleteTask"
            >
                +
            </button>
        </div>
    );
}

export { Task };
