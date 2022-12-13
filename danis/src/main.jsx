import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
    return (`${user.name} ${user.familia}`)
}

const user = {
    name: 'Danis',
    familia: 'Minnigalin'
}

function TitleHeader() {
  return <h1>Привет, {formatName(user)}</h1>;
}

function WriteTask({border}) {
  return <input style={{border}} type="text" placeholder="введи" />;
}

function TaskItem({ label, important = false }) {
  const style = {
    color: important ? "tomato" : "black",
  };

  return <li style={style}>{label}</li>;
}

function TaskItems() {
  return (
    <ul>
      <TaskItem label="Drink Cofee" />
      <TaskItem label="Create my First APP" important />
    </ul>
  );
}

function AddTask({color}) {
  return <button style={{color}}>Click me!</button>;
}

function App() {
  return (
    <div>
      <TitleHeader name="Danis" />
      <WriteTask border="1px solid yellow"/>
      <TaskItems />
      <AddTask  color="green" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
