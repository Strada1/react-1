import React from "react";
import ReactDOM from "react-dom/client";
const serverUrl = "https://api.genderize.io";

async function gender(value) {
  const url = `${serverUrl}?name=${value}`;
  let response = await fetch(url);
  if (response.ok) {
    let result = await response.json();
    let value = `${result.name} is ${result.gender}`;
    alert(value);
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}
function Button(props) {
  function click(e) {
    e.preventDefault();
    gender(props.inputValue);
  }

  return <button onClick={click}>Click</button>;
}

export default Button;
