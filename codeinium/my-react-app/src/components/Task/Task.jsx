import React from "react";

function Task({ onChangeCheckbox, checked, taskId, removeTask, text }) {
  return (
    <div className="task-todo">
      <div className="text-container">
        <input
          defaultChecked={checked}
          onChange={onChangeCheckbox}
          id={taskId}
          type="checkbox"
        ></input>
        <label htmlFor="checkbox">{text}</label>
        <button id={taskId} onClick={removeTask}>
          X
        </button>
      </div>
    </div>
  );
}

export { Task };
