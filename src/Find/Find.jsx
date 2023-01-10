import React from "react";

function Find() {
  return (
    <div className="find">
      <form id="find-form" type="submit">
        <input id="find-input" type="text" placeholder="City" />
      </form>
      <button id="find-button">{/* <img src="./icons/find.svg" /> */}</button>
    </div>
  );
}

export { Find };
