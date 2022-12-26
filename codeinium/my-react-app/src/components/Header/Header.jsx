import React from "react";

function Header(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={props.priority}
    >
      <p>{props.priority}</p>
      <input
      // value={text}
      // onChange={(e) => {
      //   onChange(e.target.value);
      // }}
      ></input>
      <button>+</button>
    </form>
  );
}

export { Header };
