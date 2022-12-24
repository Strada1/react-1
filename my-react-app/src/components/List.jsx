import { useState } from 'react';
import { Task } from './task';


let list = localStorage.getItem('taskList');
list = JSON.parse(list);
const todoItems = list.map((task, index) => (
    <Task contentTask={task.task} key={index}/>
));

function List(props) {
    const[taskList, setTaskList] = useState(todoItems)
    const { taskContainerClass, isListHigh } = props;
    if (isListHigh) {
        return (
            <div className={taskContainerClass}>
                <Task contentTask="сверстать этот ту ду" />
                <Task contentTask="А где рендер задач???" />
                {taskList}
            </div>
        );
    }
    return (
        <div className={taskContainerClass}>
            <Task contentTask="А это таски в лоу" />
            <Task contentTask="работает?" />
        </div>
    );
}

export { List };
