import './css/task.css';

function Task(props) {
    const { taskContainerClass, contentTask } = props;
    return (
        <div className={taskContainerClass}>
            <div className="task">
                <input className="checkbox" type="checkbox" />
                <div className="element-task">{contentTask}</div>
                <div className="deleteTask"> Х </div>
            </div>
        </div>
    );
}

export { Task };
