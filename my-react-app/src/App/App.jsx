import React from "react";
import "./App.css";
import { PrioritySection } from "../PrioritySection/PrioritySection";
import { tasksHighPriority, tasksLowPriority } from "../Tasks/Tasks";

function App() {
  return (
    <section className="container">
      <div className="to-do-list">
        <PrioritySection title="HIGH" tasks={tasksHighPriority} />
        <PrioritySection title="LOW" tasks={tasksLowPriority} />
      </div>
    </section>
  );
}

export { App };
