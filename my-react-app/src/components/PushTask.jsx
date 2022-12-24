import { useState } from 'react';
import { Task } from './task';
import { List } from './List';

let list = [];

function CreateTask(event) {
    event.preventDefault();
    const contentTask = event.target.firstChild.value;
	event.target.reset();
    const objectTask = {
        task: contentTask,
        status: 'Todo',
        priority: 'high',
    };

    list.push(objectTask);
    localStorage.setItem("taskList", JSON.stringify(list));
}

export { CreateTask };
