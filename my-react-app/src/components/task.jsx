import './css/task.css';

function Task(props) {
    const { contentTask } = props;
    return (
            <div className="task">
                <input className="checkbox" type="checkbox" />
                <div className="element-task">{contentTask}</div>
                <div className="deleteTask"> Х </div>
            </div>
    );
}

export { Task };
