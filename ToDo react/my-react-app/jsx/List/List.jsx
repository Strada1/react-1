import React, { useEffect } from "react";
import Task from "../Task/Task";
import taskList from "../../js/main";
function List (props){
    
    return (
        <div className={props.priority}>
            <Task task = {taskList}/>
        </div>
    )
}

export default List
{/* <Task  priority='wrapperTaskLow' /> */}