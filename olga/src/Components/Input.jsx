import React from "react";
function Input(props) {
  // function inputValue(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // }
  return <input type="text" value={props.value} onChange={props.inputValue} />;
}
export default Input;
