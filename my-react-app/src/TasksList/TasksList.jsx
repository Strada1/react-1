import "./TasksList.css";
import { TaskItem } from "../TaskItem/TaskItem";

function TasksList({ priority, tasks, changeStatus, deleteTask }) {
  const priorityTasks = tasks.filter((item) => item.priority === priority);

  return (
    <ul className="tasks-list">
      {priorityTasks.map((item, index) => (
        <TaskItem
          key={index}
          value={item.name}
          isDone={item.isDone}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export { TasksList };
