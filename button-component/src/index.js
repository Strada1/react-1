import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

function Button(props) {
	return (
		<button className={['button', props.size, props.backgroundColor].join(' ')}>
			{props.value}
		</button>
	)
}

function Layout() {
	return (
		<div>
			<Button value='Button default' />
			<Button value='Button size medium' size='button--md'/>
			<Button value='Button size large' size='button--lg'/>
			<Button value='Button size large' backgroundColor='button--bg-green'/>
		</div>
	);
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Layout />)