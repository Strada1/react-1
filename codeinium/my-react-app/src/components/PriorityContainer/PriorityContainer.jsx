import React from "react";
import { Header } from "../Header/Header.jsx";
import { TaskList } from "../Tasklist/TaskList.jsx";

function PriorityContainer({ priority, addTask, deleteTask, tasks, onSubmit }) {
  return (
    <div key={"div" + priority} className="container">
      <Header key={"head" + priority} addTask={addTask} onSubmit={onSubmit} />
      <TaskList priority={priority} deleteTask={deleteTask} taskList={tasks} />
    </div>
  );
}

export { PriorityContainer };
