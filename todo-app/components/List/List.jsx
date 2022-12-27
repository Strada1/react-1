import React from 'react';
import Task from "../Task/Task.jsx";

const List = ({task, deleteTask}) => {
    return (
        <div className="content">
            {task.map((item)=>(
                <Task  task={item} deleteTask={deleteTask}/>
            ))}
        </div>
    );
};

export default List;