import React from "react";

function Header({ priority, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <p>{priority}</p>
      <input key={"input" + priority} onChange={onChange}></input>
      <button>+</button>
    </form>
  );
}

export { Header };
