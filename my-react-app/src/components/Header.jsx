import { useState, useEffect } from 'react';
import App from '../App';
import './css/Header.css';

function Header(props) {
    const [listTask, setTask] = useState([]);
    const [contentTask, setContentTask] = useState('');
    const { inputClass, inputPlaceholder } = props;

    window.onload = function () {
        if (localStorage.getItem('taskList') !== null) {
            // listTask.push(JSON.parse(localStorage.getItem('taskList')));
            setTask([
                ...listTask,
                JSON.parse(localStorage.getItem('taskList')),
            ]);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('taskList') !== null) {
            setTask(JSON.parse(localStorage.getItem('taskList')));
            console.log('Effect Header');
        }
    }, []);

    const addTask = (event) => {
        const priority =
            event.target.firstChild.className === 'input-high input-task'
                ? 'high'
                : 'low';
        event.preventDefault();
        const objectTask = {
            task: contentTask,
            status: 'Todo',
            priority: priority,
        };
        setContentTask('');
        setTask([...listTask, objectTask]);
        console.log('listTask: ', listTask);
        // listTask.push(objectTask);
        localStorage.setItem('taskList', JSON.stringify(listTask));
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
