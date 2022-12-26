import { useState, useEffect } from 'react';
import './App.css';
import './normilize.css';
import { Title } from './components/title';
import { Header } from './components/Header';
import { List } from './components/TaskList';

function App() {
    const [task, setTask] = useState([]);

    useEffect(() => {
        if(task.length !== 0) {
            localStorage.setItem('taskList', JSON.stringify(task));
        }
        
    }, [task]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('taskList'));
        if (tasks) {
            setTask(tasks);
        }
    }, []);

    return (
        <div className="wrapper">
            <div className="container-high container">
                <Title titleClass="title-high title-task" titleName="HIGH" />
                <Header
                    inputClass="input-high input-task"
                    inputPlaceholder="Добавить важных дел"
                    task={task}
                    setTask={setTask}
                />

                <List
                    taskContainerClass="task-table task-table-high"
                    isListHigh
                    taskList={task}
                    setTask={setTask}
                />
            </div>
            <div className="container-low container">
                <Title titleClass="title-low title-task" titleName="LOW" />
                <Header
                    inputClass="input-low input-task"
                    inputPlaceholder="Добавить"
                    task={task}
                    setTask={setTask}
                />
                <List
                    taskContainerClass="task-table task-table-low"
                    isListHigh={false}
                    taskList={task}
                    setTask={setTask}
                />
            </div>
        </div>
    );
}

export default App;
