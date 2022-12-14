import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Input from "./components/Input";

function Main() {
  return (
    <div>
      <form action="">
        <Input />
        <Button />
      </form>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
