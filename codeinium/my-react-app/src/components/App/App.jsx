import React, { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header.jsx";
import { defaultText, PRIORITY, STATUS } from "../const.jsx";

// const tasksConfig = [{ priority: PRIORITY.HIGH }, { priority: PRIORITY.LOW }];

function App() {
  const [tasks, setTasks] = useState();
  const [tasksConfig] = useState([
    { priority: PRIORITY.HIGH },
    { priority: PRIORITY.LOW },
  ]);

  return (
    <div className="App">
      <div className="ToDo-container">
        {tasksConfig.map(({ priority }) => {
          <Header
            name={priority}
            text={priority === PRIORITY.HIGH ? "High" : "Low"}
            priority={priority}
            // onChange={(isHighTask) => {
            //   setTasks(isHighTask);
            // }}
            setTasks={setTasks}
          />;
        })}
      </div>

      {/* <p>{PRIORITY.HIGH}</p>
      <Header
        name={PRIORITY.HIGH}
        text={textHigh}
        onChange={(textHigh) => {
          setTextTaskHigh(textHigh);
        }}
      />
      <p>{PRIORITY.LOW}</p>
      <Header
        name={PRIORITY.LOW}
        text={textLow}
        onChange={(textLow) => {
          setTextTaskLow(textLow);
        }}
      /> */}
    </div>
  );
}

export { App };
