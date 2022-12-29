import React from "react";

function Task(props) {
  return (
    <form className={props.labelClass}>
      <input type="checkbox" className="TasksBox" />
      <span className="tasks-span">{props.taskValue}</span>
      <button className="delete" value={props.taskValue} onClick={props.onClick}>х</button>
    </form>
  );
}

export { Task };
