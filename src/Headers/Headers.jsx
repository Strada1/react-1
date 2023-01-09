import React from "react";

function Headers(props) {

  return (
    <form className="forecast-form" onSubmit={props.form}>
      <input type="text" placeholder="city" className="inputForm" onChange={props.input} value={props.value}/>
      <button className="button">
        <img src='\svg\loupe.svg' alt="Loupe" />
      </button>
    </form>
  );
}

export {Headers}