import React from 'react';
import ReactDOM from 'react-dom/client';


function Form() {
	return(
		<form>
			<TextInput />
			<Button />
		</form>
	);
}

function TextInput() {
	return <input type='text' />
}

function Button() {
	return <button>Check</button>
}

function Output(props) {
	return <div>{props.value}</div>
}

function App() {
	return (
		<main>
			<Form/>
			<Output/>
		</main>
	)
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)