import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App, reducer } from "./App";
import { createStore } from "redux";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
