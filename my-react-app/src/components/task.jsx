import './css/task.css';

function Task(props) {
    const { contentTask } = props;
    return (
        <div className="task">
            <input className="checkbox" type="checkbox" />
            <div className="element-task">{contentTask}</div>
            <button type="button" className="button-deleteTask">
                +
            </button>
        </div>
    );
}

export { Task };
