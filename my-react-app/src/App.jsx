import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import * as ReactDOM from "react-dom/client";
import "./App.css";

function Main(props) {
	return(
		<div className={props.className}>
			<Form className="gender__form" />
		</div>
	);
}

function Form(props) {
	return(
		<form className={props.className}>
			<TextInput className="gender__input" id="input" type="text" />
			<Button className="gender__button" id="button" type="submit" text="GENDERIZE"/>
		</form>
	);
}

function TextInput(props) {
	return (
		<input className={props.className} id={props.id} type={props.type} />
	);
}

function Button(props) {
	return (
		<button className={props.className} id={props.id} type={props.type}>
			{props.text}
		</button>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main className="gender" />);

export default App;
