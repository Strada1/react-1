import TaskField from "../TaskField/TaskField";
import { useState } from 'react'
import { TASKS } from '../../constans'

import { nanoid } from 'nanoid'

const TodoForm = ({ tasks, setTasks }) => {
    const [taskText, setTaskText] = useState('');

    const addTaskText = (e) => {
        const text = e.target.value
        setTaskText(text)
    }

     const addTaskHandler = (e, task) => {
        e.preventDefault();
        if (!task) return;
        const newArray = [...tasks, { text: task, priority: TASKS.PRIORITY_HIGH, isDone: '', id:nanoid()}]
         setTasks(newArray);
         setTaskText('');
    }


    return (
        <form
            onSubmit = { e => addTaskHandler(e, taskText)}

        >
            <TaskField
                changeHandler={e => addTaskText(e)}
                value={taskText}
            />
        </form>
    )
}

export default TodoForm;
