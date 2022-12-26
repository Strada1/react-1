import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { PrioritySection } from "../PrioritySection/PrioritySection";
import { useScreen } from "../hooks/useScreen";

const taskSection = [
  { title: "HIGH", priority: "high" },
  { title: "LOW", priority: "low" },
];

function App() {
  const [tasks, setTasks] = useState([]);
  const { width, isMobile, isDesktop } = useScreen();

  console.log(width, isMobile, isDesktop);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  const addTask = (task) => {
    const tasksList = [...tasks, task];
    setTasks(tasksList);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  };

  const changeStatus = (name) => {
    const tasksList = tasks.map((task) => {
      if (task.name === name) {
        task.isDone = !task.isDone;
      }
      return task;
    });
    setTasks(tasksList);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  };

  const deleteTask = (name) => {
    const tasksList = tasks.filter((item) => item.name !== name);
    setTasks(tasksList);
    localStorage.setItem("tasks", JSON.stringify(tasksList));
  };

  return (
    <section className="container">
      <div className="to-do-list">
        {taskSection.map(({ title, priority }) => (
          <PrioritySection
            title={title}
            priority={priority}
            tasks={tasks}
            addTask={addTask}
            changeStatus={changeStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </section>
  );
}

export { App };
