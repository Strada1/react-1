import React from "react";
import { list } from "../list.jsx";
import { STATUS } from "../const.jsx";

function Header(props) {
  const text = props.text;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (list.includes(text)) {
          list.push({ text, status: STATUS.TO_DO });
          console.log(list);
        }
      }}
      className={props.name}
    >
      <input
        value={text}
        onChange={(e) => {
          props.onChange(e.target.value);
          // console.log(e.target.value);
        }}
      ></input>
      <button>+</button>
    </form>
  );
}

export { Header };
