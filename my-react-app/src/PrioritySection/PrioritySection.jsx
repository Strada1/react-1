import "./PrioritySection.css";
import { Form } from "../Form/Form";
import { TasksList } from "../TasksList/TasksList";

function PrioritySection({ title, priority, setTasks, tasks }) {
  return (
    <fieldset className="tasks-wrapper">
      <legend>{title}</legend>
      <Form priority={priority} setTasks={setTasks} tasks={tasks} />
      <TasksList
        tasksData={tasks}
        priority={priority}
        setTasks={setTasks}
        tasks={tasks}
      />
    </fieldset>
  );
}

export { PrioritySection };
