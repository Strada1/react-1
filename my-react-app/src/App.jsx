// import { useState } from 'react';
import './App.css';
import { Title } from './components/title';
import { Input } from './components/input';
import { Task } from './components/task';

function App() {
    return (
        <div className="wrapper">
            <div className="container-high container">
                <Title titleClass="title-high title-task" titleName="HIGH" />
                <Input
                    inputClass="input-high input-task"
                    inputPlaceholder="Добавить важных дел"
                 />
                <Task
                    taskContainerClass="task-table task-table-high"
                    contentTask="сверстать тупой ту ду"
                 />
            </div>
            <div className="container-low container">
                <Title titleClass="title-low title-task" titleName="LOW" />
                <Input
                    inputClass="input-low input-task"
                    inputPlaceholder="Добавить"
                 />
                <Task
                    taskContainerClass="task-table task-table-low"
                    contentTask="Стилизовать этот ту ду"
                 />
            </div>
        </div>
    );
}

export default App;
