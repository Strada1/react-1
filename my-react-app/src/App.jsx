// import { useState } from 'react';
import './App.css';
import './normilize.css';
import { Title } from './components/title';
import { Header } from './components/Header';
import { List } from './components/List';



function App() {
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
                />
            </div>
        </div>
    );
}

export default App;
