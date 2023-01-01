import React, { useState } from "react";
import "./App.css";
import { PRIORITY, STATUS } from "../const.jsx";
import { PriorityContainer } from "../PriorityContainer/PriorityContainer.jsx";
import { nanoid } from "nanoid";

function App() {
  const [defaultConfig] = useState([
    { priority: PRIORITY.HIGH },
    { priority: PRIORITY.LOW },
  ]);

  const [valueHigh, setValueHigh] = useState("");
  const [valueLow, setValueLow] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      text: "тестовая задача",
      priority: PRIORITY.HIGH,
      status: STATUS.TO_DO,
    },
    {
      id: nanoid(),
      text: "fasdf",
      priority: PRIORITY.LOW,
      status: STATUS.TO_DO,
    },
    {
      id: nanoid(),
      text: "132",
      priority: PRIORITY.LOW,
      status: STATUS.DONE,
    },
    {
      id: nanoid(),
      text: "ggg",
      priority: PRIORITY.LOW,
      status: STATUS.DONE,
    },
  ]);

  const addTask = (e, priority) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        text: priority === PRIORITY.HIGH ? valueHigh : valueLow,
        priority: priority,
        status: STATUS.TO_DO,
      },
    ]);
  };

  const changeBoxHandle = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        if (task.status === STATUS.TO_DO) {
          task.status = STATUS.DONE;
          console.log(tasks);
        } else {
          task.status = STATUS.TO_DO;
        }
      }
    });
  };

  const deleteTask = (id) => {
    console.log(tasks);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changePriority = (e, priority) => {
    const isHighPriority =
      priority === PRIORITY.HIGH
        ? setValueHigh(e.target.value)
        : setValueLow(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        {defaultConfig.map((item) =>
          item.priority ? (
            <div key={`div${item.priority}`}>
              <PriorityContainer
                priority={item.priority}
                onChange={(e) => changePriority(e, item.priority)}
                onSubmit={(e) => {
                  addTask(e, item.priority);
                }}
                deleteTask={deleteTask}
                taskList={tasks}
                changeCheckbox={changeBoxHandle}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export { App };
