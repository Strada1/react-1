import React from "react";
import { PRIORITY, STATUS } from "../const.jsx";
import { Task } from "../Task/Task.jsx";
import { nanoid } from "nanoid";

function TaskList({ changeCheckbox, priority, taskList, deleteTask }) {
  const isHighPriority =
    priority === PRIORITY.HIGH ? PRIORITY.HIGH : PRIORITY.LOW;
  const newTaskList = taskList.filter(
    (item) => item.priority === isHighPriority
  );
  return (
    <div key={"list" + isHighPriority} className="taskList">
      {newTaskList.map((task) =>
        task.text ? (
          <Task
            taskId={task.id}
            removeTask={() => deleteTask(task.id)}
            text={task.text}
            key={nanoid()}
            checked={task.status === STATUS.TO_DO ? false : true}
            onChangeCheckbox={() => changeCheckbox(task.id)}
          />
        ) : null
      )}
    </div>
  );
  // if (priority === PRIORITY.HIGH) {
  //   const newTaskList = taskList.filter(
  //     (item) => item.priority === PRIORITY.HIGH
  //   );
  //   return (
  //     <div key={"list" + priority} className="taskList">
  //       {newTaskList.map((task, index) =>
  //         task.text ? (
  //           <Task
  //             taskId={task.id}
  //             removeTask={deleteTask}
  //             text={task.text}
  //             key={index}
  //             checked={task.status === STATUS.TO_DO ? false : true}
  //             onChangeCheckbox={changeCheckbox}
  //           />
  //         ) : null
  //       )}
  //     </div>
  //   );
  // } else {
  //   const newTaskList = taskList.filter(
  //     (item) => item.priority === PRIORITY.LOW
  //   );
  //   return (
  //     <div key={"list" + priority} className="taskList">
  //       {newTaskList.map((task, index) =>
  //         task.text ? (
  //           <Task
  //             taskId={task.id}
  //             removeTask={deleteTask}
  //             text={task.text}
  //             key={index}
  //             checked={task.status === STATUS.TO_DO ? false : true}
  //             onChangeCheckbox={changeCheckbox}
  //           />
  //         ) : null
  //       )}
  //     </div>
  //   );
  // }
}

export { TaskList };
