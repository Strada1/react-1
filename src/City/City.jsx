import React from "react";

function City(props) {
  return (
      <li onClick={props.forecast}>
        <p>{props.cityName}</p>
        <button className="button-close" onClick={props.deleteFunc}>x</button>
      </li>
  );
}

export { City };