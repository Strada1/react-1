import { useState } from 'react'
import './Todo.css';

import TodoForm from "../TodoForm/TodoForm";
import PriorityBlock from '../PriorityBlock/PriorityBlock';
import Task from '../Task/Task'
import {TASKS} from '../../constans'



const taskList = [
    {
        text: 'Покормить кота',
        priority: TASKS.PRIORITY_LOW,
        isDone: true,
    },
     {
        text: 'Прочитать книгу Стивена Кинга',
        priority:  TASKS.PRIORITY_HIGH,
        isDone: false,
    },
    {
        text: 'Постирать одежду',
        priority: TASKS.PRIORITY_HIGH,
        isDone: false,
    },
     {
        text: 'Проверить почту',
        priority: TASKS.PRIORITY_LOW,
        isDone: false,

    }
]



const Todo = () => {
    return (
        <div className='todo'>
            <TodoForm />

            <PriorityBlock
                header='High'
                priority='high'
                tasks={taskList}
            />

            <PriorityBlock
                header='Low'
                priority='low'
                tasks={taskList}
            />

        </div>
    )
}

export default Todo;
