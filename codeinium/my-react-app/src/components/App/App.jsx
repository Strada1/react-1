import React, { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header.jsx";
import { TaskList } from "../Tasklist/TaskList.jsx";
import { PRIORITY, STATUS } from "../const.jsx";
// import { PriorityContainer } from "../PriorityContainer/PriorityContainer.jsx";

function App() {
  const [defaultConfig] = useState([
    { priority: PRIORITY.HIGH },
    { priority: PRIORITY.LOW },
  ]);
  const [valueHigh, setValueHigh] = useState("");
  const [valueLow, setValueLow] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 3423424,
      text: "тестовая задача",
      priority: PRIORITY.HIGH,
      status: STATUS.TO_DO,
    },
    {
      id: 235235,
      text: "fasdf",
      priority: PRIORITY.LOW,
      status: STATUS.TO_DO,
    },
    {
      id: 213423412,
      text: "132",
      priority: PRIORITY.LOW,
      status: STATUS.TO_DO,
    },
    {
      id: 51235125,
      text: "ggg",
      priority: PRIORITY.LOW,
      status: STATUS.TO_DO,
    },
  ]);

  const addTask = (e, priority) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: priority === PRIORITY.HIGH ? valueHigh : valueLow,
        priority: priority,
        status: STATUS.TO_DO,
      },
    ]);
    console.log(tasks);
  };

  const deleteTask = (e) => {
    e.preventDefault();
    console.log(e);
    const currentTask = e.target.attributes.id.value;
    setTasks(tasks.filter((task) => task.id != currentTask));
  };

  const changeHandler = (e, priority) => {
    if (priority === PRIORITY.HIGH) {
      setValueHigh(e.target.value);
    } else {
      setValueLow(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {defaultConfig.map((item) =>
          item.priority ? (
            <div key={"div" + item.priority}>
              <Header
                priority={item.priority}
                onChange={(e) => changeHandler(e, item.priority)}
                onSubmit={(e) => {
                  addTask(e, item.priority);
                }}
              />
              <TaskList
                priority={item.priority}
                deleteTask={deleteTask}
                taskList={tasks}
              />
            </div>
          ) : null
        )}

        {/* <Header
          addTask={addTask}
          onSubmit={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        />
        <TaskList
          priority={PRIORITY.HIGH}
          deleteTask={deleteTask}
          taskList={tasks}
        /> */}
      </div>
    </div>
  );
}

export { App };
