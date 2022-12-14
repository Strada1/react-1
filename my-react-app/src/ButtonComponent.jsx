import React from "react";

export default function ButtonComponent(props) {
  return (
    <div>
      <button className={props.className}>{props.text}</button>
    </div>
  );
}
