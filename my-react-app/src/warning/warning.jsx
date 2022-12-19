import React from "react";
import "./warning.css";

function ShowWarning({ warning }) {
  if (warning) {
    return null;
  }
  return <div className="warning">The name is too short!</div>;
}

export { ShowWarning };
