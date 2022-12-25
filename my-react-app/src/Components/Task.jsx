function Task(props) {
    return (
        <div className="low-task">
            <form className="low-task-form">
                <input type="radio" className="TasksBox" id="HighTasks" />
                <span className="tasks-span">{props.task.title}</span>
                <button
                    label={props.task.id}
                    className="delete"
                    onClick={props.remove}
                >
                    х
                </button>
            </form>
        </div>
    )
}

export { Task }
