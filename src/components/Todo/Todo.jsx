import { useState } from 'react'
import './Todo.css';

import TodoForm from "../TodoForm/TodoForm";
import PriorityBlock from '../PriorityBlock/PriorityBlock';
import Task from '../Task/Task'


const tasks = [
    {
        task: 'Покормить кота',
        priority: 'hight',
        done: true,
        id: '1'
    },
     {
        task: 'Прочитать книгу Стивена Кинга',
        priority: 'low',
        done: false,
        id: '2'
    },
    {
        task: 'Постирать одежду',
        priority: 'hight',
        done: 'false',
        id: '3'
    },
     {
        task: 'Проверить почту',
        priority: 'hight',
        done: false,
        id: '4'
    }
]

const renderTasks = tasks.map(task => {
                if (task.priority === 'hight') {

                return <PriorityBlock
                    header='Hight'
                >
                    <Task
                        id={task.id}
                        status={task.status}
                        taskText = {task.task}
                    />
                </PriorityBlock>
                }
                return <PriorityBlock
                    header='Low'
                >
                    <Task
                        id={task.id}
                        status={task.status}
                        taskText = {task.task}
                    />
                </PriorityBlock>

            })



const Todo = () => {
    return (
        <div className='todo'>
            <TodoForm />
            {renderTasks}


        </div>
    )
}

export default Todo;
