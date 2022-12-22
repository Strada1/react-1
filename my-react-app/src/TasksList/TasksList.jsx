import "./TasksList.css"
import { ButtonClose } from "../ButtonClose/ButtonClose";

function TaskItem({ value }) {
  return (
    <li className="task-item">
      <label>
        <input type="checkbox" name="to_do" />
        <p class="task-name">{value}</p>
      </label>
      <ButtonClose />
    </li>
  );
}

function TasksList({ tasks }) {
  return (
    <ul className="tasks-list">
      {tasks.map((item) => (
        <TaskItem value={item} />
      ))}
    </ul>
  );
}

export { TasksList };
