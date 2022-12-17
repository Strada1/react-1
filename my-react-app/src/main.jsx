import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Main } from "./app/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main class="container" />
  </React.StrictMode>
);
