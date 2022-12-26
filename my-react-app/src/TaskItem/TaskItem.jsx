import { ButtonClose } from "../ButtonClose/ButtonClose";

function TaskItem({ value, changeStatus, deleteTask, isDone }) {
  return (
    <li className={`task-item ${isDone ? "status-done" : ""}`}>
      <label>
        <input
          type="checkbox"
          name="to_do"
          onClick={() => changeStatus(value)}
          checked={isDone}
        />
        <p class="task-name">{value}</p>
      </label>
      <ButtonClose value={value} deleteTask={deleteTask} />
    </li>
  );
}

export {TaskItem}