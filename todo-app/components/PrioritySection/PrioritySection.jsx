import React from 'react';
import Header from "../Header/Header.jsx";
import List from "../List/List.jsx";

const PrioritySection = ({title, tasks, addTask, deleteTask}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Header addTask={addTask}/>
            <List task={tasks} deleteTask={deleteTask}/>
        </div>
    );
};

export default PrioritySection;
