import React, { useState } from "react";
import "./Header.css";


function Header(props) {
  const [todo, setTodo] = useState([{
    task:'task', priority: 'test', status: 'test'
  }]);

  const [task, setTask] = useState("");
  const addTask = (e) => {
    if (e.key === "Enter") {
      setTodo([
        ...todo,
        {
          task: task,
          priority: "high",
          status: "to do",
        },
      ]);
      setTask('')
    }
  };


  return (
    <form onSubmit={(e) => e.preventDefault()} className="inputTaskWrapper">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={addTask}
        className="inputTask"
        placeholder="Entry your task"
      />
      <button>♡</button>
    </form>
  );
}

export default Header;
