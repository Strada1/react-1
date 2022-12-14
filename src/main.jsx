import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button";
import Input from "./Input";
// import './main.css'

const TEXTINBUTTON = "НАЖМИ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <Input> </Input>
      <Button textInButton={TEXTINBUTTON}> </Button>
    </div>
  </React.StrictMode>
);
