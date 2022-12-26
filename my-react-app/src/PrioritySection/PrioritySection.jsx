import "./PrioritySection.css";
import { Form } from "../Form/Form";
import { TasksList } from "../TasksList/TasksList";

function PrioritySection({ title, priority, tasks, addTask, changeStatus, deleteTask }) {
  return (
    <fieldset className="tasks-wrapper">
      <legend>{title}</legend>
      <Form priority={priority} tasks={tasks} addTask ={addTask} />
      <TasksList
        priority={priority}
        tasks={tasks}
        changeStatus = {changeStatus}
        deleteTask = {deleteTask}
      />
    </fieldset>
  );
}

export { PrioritySection };
