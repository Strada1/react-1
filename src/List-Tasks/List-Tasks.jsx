import React from "react";
import { Task } from "./Task";

function ListTask({todo, priority, onClick}) {
    return(
        <div>
        {todo.map(item => item.priority === priority ?  <Task labelClass='task-form' taskValue={item.task} value={item.task} onClick={onClick}/> : null)}
        </div>
    )
}

export { ListTask};
