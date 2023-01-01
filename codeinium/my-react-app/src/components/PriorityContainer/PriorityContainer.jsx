import React from "react";
import { Header } from "../Header/Header.jsx";
import { TaskList } from "../Tasklist/TaskList.jsx";

function PriorityContainer({
  priority,
  onChange,
  deleteTask,
  taskList,
  onSubmit,
  changeCheckbox,
}) {
  return (
    <div key={"div" + priority}>
      <Header priority={priority} onChange={onChange} onSubmit={onSubmit} />
      <TaskList
        priority={priority}
        deleteTask={deleteTask}
        taskList={taskList}
        changeCheckbox={changeCheckbox}
      />
    </div>
  );
}

export { PriorityContainer };
