import './css/task.css';

function Task(props) {
    const { contentTask } = props;

    const deleteTask = (event) => {
        console.log(event.target.previousSibling)
    }

    return (
        <div className="task">
            <input className="checkbox" type="checkbox" />
            <div className="element-task">{contentTask}</div>
            <button onClick={deleteTask} type="button" className="button-deleteTask">
                +
            </button>
        </div>
    );
}

export { Task };
