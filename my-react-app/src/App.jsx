import React from "react";
import ButtonComponent from "./ButtonComponent";
import "./styles.css";

export default function App() {
  return (
    <div>
      <ButtonComponent className="red_big" text="click!" />
      <ButtonComponent className="yellow_middle" text="push!" />
      <ButtonComponent className="blue_small" text="run!" />
    </div>
  );
}
