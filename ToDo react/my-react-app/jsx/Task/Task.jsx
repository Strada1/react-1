import React from "react";
import "./Task.css";

function Task(props) {
  const tasks = props.task;

  const taskList = tasks.map((task) => (
    <div key={Math.random()} className='wrapperTask'>
      <input type="checkbox" />

      <div className="wrapperTaskText">
        <p>{task.task}</p>
        <button className="buttonDone">✓</button>
      </div>
      
    </div>
  ));

  return taskList;
}

export default Task;
