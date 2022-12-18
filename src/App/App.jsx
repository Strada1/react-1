import React from 'react';
import { TextInput } from '/src/Input/TextInput';
import { Button } from '/src/Button/Button';
import { serverURL, genderize } from '/src/Request/Request';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			gender: ''
		};
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		genderize(`${serverURL}?name=${this.state.value}`)
			.then((result) => {
				this.setState({ gender: result.gender },
					() => { alert(this.state.gender) })
			});
	}

	render() {
		return (
			<div>
				<h1 className='headerGenderize'>Enter your name</h1>
				<form onSubmit={this.handleSubmit} className="container">
					<TextInput onChange={this.handleChange} />
					<Button />
				</form>
			</div>
		)
	}
}

export { Main };