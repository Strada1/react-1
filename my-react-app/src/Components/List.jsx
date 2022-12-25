import { Task } from './Task'

function List({ tasks, priority, removeTask }) {
    return (
        <div className="high-task" id="highTask">
            {tasks.map((task) =>
                task.priority === priority ? (
                    <Task task={task} key={task.id} remove={removeTask} />
                ) : null
            )}
        </div>
    )
}

export { List }
