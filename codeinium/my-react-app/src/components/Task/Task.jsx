import React from "react";
function Task(props) {
  return (
    <li className="task-todo">
      <div className="text-container">
        <input type="checkbox"></input>
        <label htmlFor="checkbox">{props.text}</label>
        <button>X</button>
      </div>
    </li>
  );
}

export { Task };
