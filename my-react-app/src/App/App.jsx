import React from "react";
import "./App.css";
import { PrioritySection } from "../PrioritySection/PrioritySection";
import { tasks, PRIORITY } from "../Tasks/Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasksArr, setTasks] = useState(tasks);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      localStorage.removeItem("tasks");
    }
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr]);

  return (
    <section className="container">
      <div className="to-do-list">
        <PrioritySection
          title="HIGH"
          priority= {PRIORITY.HIGH}
          setTasks={setTasks}
          tasks={tasksArr}
        />
        <PrioritySection
          title="LOW"
          priority={PRIORITY.LOW}
          setTasks={setTasks}
          tasks={tasksArr}
        />
      </div>
    </section>
  );
}

export { App };
