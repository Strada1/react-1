import React from "react";
import "./warning.css";

function ShowWarning(props) {
    if(props.warning) {
      return null
    }
    return(
      <div className="warning">
        The name is too short!
      </div>
    )
  }

  export {ShowWarning}