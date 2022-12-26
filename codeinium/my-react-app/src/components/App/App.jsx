import React, { useState } from "react";
import "./App.css";
import { Header } from "../Header/Header.jsx";
import { defaultText, PRIORITY, STATUS } from "../const.jsx";
const defaultArr = [];

function App() {
  const [tasks, setTasks] = useState(defaultArr);
  const [textTaskHigh, setTextTaskHigh] = useState(defaultText);
  const [textTaskLow, setTextTaskLow] = useState(defaultText);
  const textHigh = textTaskHigh;
  const textLow = textTaskLow;

  return (
    <div className="App">
      <p>{PRIORITY.HIGH}</p>
      <Header
        name={PRIORITY.HIGH}
        text={textHigh}
        onChange={(textHigh) => {
          setTextTaskHigh(textHigh);
        }}
        onSubmit={(e, textHigh) => {
          e.preventDefault;
          setTasks({
            text: textHigh,
            status: STATUS.TO_DO,
            priority: PRIORITY.HIGH,
          });
        }}
      ></Header>
      <p>{PRIORITY.LOW}</p>
      <Header
        name={PRIORITY.LOW}
        text={textLow}
        onChange={(textLow) => {
          setTextTaskLow(textLow);
        }}
      ></Header>
    </div>
  );
}

export { App };
