
import './Task.css'
import TaskCloseButton from '../TaskCloseButton/TaskCloseButton';
import TaskCheckButton from '../TaskCheckButton/TaskCheckButton';

const Task = ({onDelete, status, id, text, changeStatus}) => {
    return (
        <div
            className={status ? 'task taskDone' : 'task taskInprogress'}
            id={id}
            status={status}
            onClick={changeStatus}
        >
            <TaskCheckButton
                style='task_checkBtn'
                id={id}
                isChecked={status ? 'checked' : ''}

            />
            <div className='task_text'>{text}</div>
            <TaskCloseButton
                style='task_closebtn'
                onDelete={() => onDelete()}
                id={id}
            />
        </div>

    )
}

export default Task;
