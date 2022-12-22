import './TaskField.css';
import TaskInput from '../TaskInput/TaskInput'
import AddTaskButton from '../AddTaskButton/AddTaskButton'

const TaskField = props => {
    return (
        <div className="task_field">
            <TaskInput
                type='text'
                style = 'task_input'
                placeholder='Введите задачу'
            />
            <AddTaskButton
                text='+'
                style='task_fieldbtn'
            />
        </div>
    )
}

export default TaskField;
