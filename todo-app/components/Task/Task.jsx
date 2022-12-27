const Task = ({task, deleteTask}) => {

    return (
        <div className="todo">
            <div>
                <input type="checkbox" className="custom-checkbox"/>
                <label className="task_name">{task}</label>
            </div>
            <button type="button"
                    onClick={() => {
                        deleteTask(task);
                    }}
                    className="deleteTask"/>
        </div>
    );
};

export default Task;