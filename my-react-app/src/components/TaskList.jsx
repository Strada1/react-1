import { useState } from 'react';
import { Task } from './task';

function List(props) {
    const { taskContainerClass, isListHigh, taskList } = props;

    const filterPriority = (array, priority) =>
        array.filter((item) => item.priority === priority);

    if (taskList) {
        const todoItemsHigh = filterPriority(taskList, 'high').map(
            (task, index) => <Task contentTask={task.task} key={index} />
        );
        const todoItemsLow = filterPriority(taskList, 'low').map(
            (task, index) => <Task contentTask={task.task} key={index} />
        );
        if (isListHigh) {
            return <div className={taskContainerClass}>{todoItemsHigh}</div>;
        }
        return <div className={taskContainerClass}>{todoItemsLow}</div>;
    }
    return null;
}

export { List };
