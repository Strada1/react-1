import { useState } from 'react';
import './css/Header.css';

const defaultValue = '';

function Header(props) {
    const { inputClass, inputPlaceholder, task, setTask } = props;
    const [contentTask, setContentTask] = useState(defaultValue);

    const addTask = (event) => {
        event.preventDefault();
        const repeatTask = task.findIndex((item) => item.task === contentTask.trim());
        if (!contentTask) {
            alert('Пустая строка, введите задачу');
        } else if (repeatTask === -1) {
            const priority =
                event.target.firstChild.className === 'input-high input-task'
                    ? 'high'
                    : 'low';
            const objectTask = {
                task: contentTask.trim(),
                status: 'Todo',
                priority,
                checked: false,
            };
            setContentTask(defaultValue);
            setTask([...task, objectTask]);
        } else {
            alert('Уже есть такая задача');
        }
    };

    return (
        <form onSubmit={addTask}>
            <input
                onChange={(event) => {
                    event.preventDefault();
                    setContentTask(event.target.value);
                }}
                type="text"
                className={inputClass}
                placeholder={inputPlaceholder}
                value={contentTask}
            />
            <button type="submit" className="button-add-task">
                +
            </button>
        </form>
    );
}

export { Header };
