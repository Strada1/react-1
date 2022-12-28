const Task = ({tasks, deleteTask}) => {

    return (
        <div className="todo">
            <div>
                <input type="checkbox" className="custom-checkbox"/>
                <label className="task_name">{tasks.name}</label>
            </div>
            <button type="button"
                    onClick={() => {
                        deleteTask(tasks);
                    }}
                    className="deleteTask"/>
        </div>
    );
};

export default Task;