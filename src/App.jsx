import React, { useEffect, useState } from "react";
import { Headers } from "./Headers/Headers";
import { ListTask } from "./List-Tasks/List-Tasks";

function App() {
  const [todo, setTodo] = useState([
    { task: 'задача', done: false, priority: "low" },
  ]);
  const defaultTask = "";
  const highFormClass = "add-task-form-high";
  const highInputClass = "add-task-input-high";

  const [highTask, setHighTask] = useState(defaultTask);
  const [lowTask, setLowTask] = useState(defaultTask);

  function GetValueTask(event) {
    todo.forEach((item => {
      if (item.task === event.target.value) {
        return alert('Нельзя добавить существующую таску')
      } else {
        if (event.target.className === highInputClass) {
          setHighTask(event.target.value);
        } else {
          setLowTask(event.target.value);
        }
      }
    }))
  }

  function AddTask(event) {
    event.preventDefault();
    if (event.target.className === highFormClass) {
      setTodo([
        ...todo,
        {
          task: highTask,
          done: false,
          priority: "high",
        },
      ]);
      setHighTask(defaultTask);
    } else {
      setTodo([
        ...todo,
        {
          task: lowTask,
          done: false,
          priority: "low",
        },
      ]);
      setLowTask(defaultTask);
    }
  }

  function DeleteTask(event) {
    event.preventDefault();
   const task = (event.nativeEvent.path[0].value)
   setTodo([...todo].filter((item) => item.task !== task));
  }


  return (
    <div className="ToDo">
      <div className="High">
        <p>High</p>
        <Headers
          inputClass="add-task-input-high"
          mainClass="add-task-high"
          formClass="add-task-form-high"
          inputValue={highTask}
          onChange={GetValueTask}
          onSubmit={AddTask}
        />
        <ListTask todo={todo} priority={"high"} onClick={DeleteTask} />
      </div>
      <div className="Low">
        <p>Low</p>
        <Headers
          inputClass="add-task-input-low"
          mainClass="add-task-low"
          formClass="add-task-form-low"
          inputValue={lowTask}
          onChange={GetValueTask}
          onSubmit={AddTask}
        />
        <ListTask todo={todo} priority={"low"} onClick={DeleteTask} />
      </div>
    </div>
  );
}

export { App };
