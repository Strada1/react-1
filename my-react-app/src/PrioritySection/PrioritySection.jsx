import "./PrioritySection.css"
import { Form } from "../Form/Form";
import { TasksList } from "../TasksList/TasksList";

function PrioritySection({ title, tasks }) {
  return (
    <fieldset className="tasks-wrapper">
      <legend>{title}</legend>
      <Form />
      <TasksList tasks={tasks} />
    </fieldset>
  );
}

export { PrioritySection };
