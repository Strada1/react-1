import React from 'react';
import Task from "../Task/Task.jsx";

const List = ({priority, tasks, deleteTask}) => {
    const priorityTasks = tasks.filter((item) => item.priority === priority);
    return (
        <div className="content">
            {priorityTasks.map((item)=>(
                 <Task  key={Date.now() * Math.random()}  tasks={item} deleteTask={deleteTask}/>

            ))}
        </div>
    );
};

export default List;