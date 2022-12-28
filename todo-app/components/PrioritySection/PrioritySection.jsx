import React from 'react';
import Header from "../Header/Header.jsx";
import List from "../List/List.jsx";

const PrioritySection = ({title, priority, tasks, addTask, deleteTask,placeholder}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Header priority={priority} addTask={addTask} placeholder={placeholder}/>
            <List priority={priority} tasks={tasks} deleteTask={deleteTask}/>
        </div>
    );
};

export default PrioritySection;
