import { useState } from 'react'
import './Todo.css';

import TodoForm from "../TodoForm/TodoForm";
import PriorityBlock from '../PriorityBlock/PriorityBlock';





// const taskList = [
    // {
    //     text: 'Покормить кота',
    //     priority: TASKS.PRIORITY_LOW,
    //     isDone: true,
    // },
//      {
//         text: 'Прочитать книгу Стивена Кинга',
//         priority:  TASKS.PRIORITY_HIGH,
//         isDone: false,
//     },
//     {
//         text: 'Постирать одежду',
//         priority: TASKS.PRIORITY_HIGH,
//         isDone: false,
//     },
//      {
//         text: 'Проверить почту',
//         priority: TASKS.PRIORITY_LOW,
//         isDone: false,

//     }
// ]




const Todo = () => {


    const [tasks, setTasks] = useState([]);



    return (
        <div className='todo'>
            <TodoForm
                setTasks={setTasks}
                tasks = {tasks}
            />

            <div className='todo-bar'>
                <PriorityBlock
                    header='High'
                    priority='high'
                    tasks={tasks}
                    setTasks={setTasks}
                />

                <PriorityBlock
                    header='Low'
                    priority='low'
                    tasks={tasks}
                    setTasks={setTasks}
                />
            </div>

        </div>
    )
}

export default Todo;
