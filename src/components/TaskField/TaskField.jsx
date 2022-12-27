import './TaskField.css';
import TaskInput from '../TaskInput/TaskInput'
import AddTaskButton from '../AddTaskButton/AddTaskButton'

const TaskField = ({changeHandler, value}) => {

    return (
        <div className="task_field">
            <TaskInput
                type='text'
                style = 'task_input'
                placeholder='Введите задачу'
                changeHandler={e => changeHandler(e)}
                value={value}
            />
            <AddTaskButton
                text='+'
                style='task_fieldbtn'
            />
        </div>
    )
}

export default TaskField;
