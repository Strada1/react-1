import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/button/Button.jsx";
import Input from "./components/input/Input.jsx";
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
