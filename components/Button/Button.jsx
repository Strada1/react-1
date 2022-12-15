import React from 'react';
import '/src/components/Button/button.css'

class Button extends React.Component {
	constructor() {
		super();
		this.onClick = (e) => {
			e.preventDefault();
			console.log("Hello World");
		}
	}
	render() {
		return (
			<button onClick={this.onClick} className="buttonSubmitGenderize">Click me</button>
		)
	}
}

export default Button;