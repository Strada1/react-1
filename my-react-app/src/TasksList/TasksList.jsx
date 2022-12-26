import "./TasksList.css";
import { ButtonClose } from "../ButtonClose/ButtonClose";

function TaskItem({ value, changeStatus, deleteTask, status }) {
  return (
    <li className={`task-item + ${status ? "status-done" : ""}`}>
      <label>
        <input
          type="checkbox"
          name="to_do"
          onClick={() => changeStatus(value)}
          checked={status ? "true" : ""}
        />
        <p class="task-name">{value}</p>
      </label>
      <ButtonClose value={value} deleteTask={deleteTask} />
    </li>
  );
}

function TasksList({ tasksData, priority, setTasks, tasks }) {
  const changeStatus = (name) => {
    const copyTasksArr = [...tasks];
    const task = copyTasksArr.find((item) => item.name === name);
    task.isDone = !task.isDone;
    setTasks(copyTasksArr);
  };

  const deleteTask = (name) => {
    setTasks([...tasks].filter((item) => item.name !== name));
  };

  const priorityTasks = tasksData.filter((item) => item.priority === priority);

  return (
    <ul className="tasks-list">
      {priorityTasks.map((item) => (
        <TaskItem
          key={Math.random()}
          value={item.name}
          status={item.isDone}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export { TasksList };
