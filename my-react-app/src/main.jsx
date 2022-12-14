import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Main(props) {
  return (
    <div className={props.class}>
      <form className="form">
        <Input type="text" name="name" placeholder="Your name" />
        <Button />
      </form>
    </div>
  );
}

function Input(props) {
  return (
    <label>
      <input
        className="input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </label>
  );
}

function Button() {
  return (
    <button className="button" type="submit">
      Click me
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main class="container" />);
