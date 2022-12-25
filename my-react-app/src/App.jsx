import { useState } from 'react';
import './App.css';
import './normilize.css';
import { Title } from './components/title';
import { Header } from './components/Header';
import { List } from './components/TaskList';

function App() {
    const taskList = JSON.parse(localStorage.getItem('taskList')) ?? false;
    const [task, setTask] = useState(taskList)
    


    return (
        <div className="wrapper">
            <div className="container-high container">
                <Title titleClass="title-high title-task" titleName="HIGH" />
                <Header
                    inputClass="input-high input-task"
                    inputPlaceholder="Добавить важных дел"
                />

                <List
                    taskContainerClass="task-table task-table-high"
                    isListHigh
                    taskList={task}
                />
            </div>
            <div className="container-low container">
                <Title titleClass="title-low title-task" titleName="LOW" />
                <Header
                    inputClass="input-low input-task"
                    inputPlaceholder="Добавить"
                />
                <List
                    taskContainerClass="task-table task-table-low"
                    isListHigh={false}
                    taskList={task}
                />
            </div>
        </div>
    );
}

export default App;
