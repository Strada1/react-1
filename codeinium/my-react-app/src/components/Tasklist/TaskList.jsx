import React from "react";
import { PRIORITY } from "../const.jsx";
import { Task } from "../Task/Task.jsx";

function TaskList({ priority, taskList, deleteTask }) {
  if (priority === PRIORITY.HIGH) {
    const newTaskList = taskList.filter(
      (item) => item.priority === PRIORITY.HIGH
    );
    return (
      <div key={"list" + priority} className="taskList">
        {newTaskList.map((task, index) =>
          task.text ? (
            <Task
              taskId={task.id}
              removeTask={(e) => deleteTask(e)}
              text={task.text}
              key={index}
            />
          ) : null
        )}
      </div>
    );
  } else {
    const newTaskList = taskList.filter(
      (item) => item.priority === PRIORITY.LOW
    );
    return (
      <div key={"list" + priority} className="taskList">
        {newTaskList.map((task, index) =>
          task.text ? (
            <Task
              taskId={task.id}
              removeTask={deleteTask}
              text={task.text}
              key={index}
            />
          ) : null
        )}
      </div>
    );
  }
}

export { TaskList };
