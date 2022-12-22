import './Task.css'
import TaskCloseButton from '../TaskCloseButton/TaskCloseButton';
import TaskCheckButton from '../TaskCheckButton/TaskCheckButton';

const Task = props => {
    return (
        <div
            className={props.status ? 'task taskDone' : 'task taskInprogress'}
            id={props.id}
            status={props.status}
        >
            <TaskCheckButton
                style='task_checkBtn'
                id={props.id}
                isChecked={props.status ? 'checked': ''}
            />
            <div className='task_text'>{props.taskText}</div>
            <TaskCloseButton
                style='task_closebtn'
            />
        </div>

    )
}

export default Task;
