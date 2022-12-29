import React from "react";

function Task({ taskId, removeTask, text }) {
  return (
    <div className="task-todo">
      <div className="text-container">
        <input type="checkbox"></input>
        <label htmlFor="checkbox">{text}</label>
        <button id={taskId} onClick={removeTask}>
          X
        </button>
      </div>
    </div>
  );
}

export { Task };
