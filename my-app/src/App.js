import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";

const MOUSE_CLICK = "MOUSE_CLICK";
function createMouseClickAction(evt) {
  return {
    type: MOUSE_CLICK,
    payload: {
      time: new Date().toISOString(),
      clientX: evt.clientX,
      clientY: evt.clientY,
    },
  };
}
function reducer(state = [], action = undefined) {
  if (typeof action === "object" && action.type === MOUSE_CLICK) {
    const newState = [...state];
    newState.push(action.payload);
    return newState;
  }
  return state;
}

const itemToString = (item) =>
  `time:${item.time}, x: ${item.clientX}, y: ${item.clientY}`;

const View = ({ label }) => {
  const state = useSelector((state) => state);
  return (
    <ul>
      {state.length <= 0 ? (
        <li>{label}</li>
      ) : (
        state.map((item) => <li key={item.time}>{itemToString(item)}</li>)
      )}
    </ul>
  );
};

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleClick = (evt) => {
      dispatch(createMouseClickAction(evt));
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div className="container">
      <View label="left" />
      <View label="right" />
    </div>
  );
};

export default App;
