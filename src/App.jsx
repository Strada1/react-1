import React from "react";
import { TextInput } from "./components/input/input.jsx";
import { Button } from "./components/button/button.jsx";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			resultsList: [],
			isNameToShort: false
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async handleClick() {
		const name = this.state.name;
		const isNameToShort = name.length <= 2;

		if (isNameToShort) {
			this.setState({ isNameToShort: true });
			return;
		}

		const { gender } = await fetchData(name);
		const resultsList = this.state.resultsList.slice();
		resultsList.push([name, gender]);
		this.setState({ resultsList });
		this.setState({ isNameToShort: false });
		this.setState({ name: '' });
	}

	handleInput(e) {
		const name = e.target.value;
		this.setState({ name });
	}

	render() {
		const resultsList = this.state.resultsList;
		const isResultsListEmpty = resultsList.length === 0;
		const listItem = resultsList.map(([name, gender], index) => {
			return (
				<li key={index}>
					{name} - {gender}
				</li>
			);
		});

		return (
			<div>
				<div>
					<TextInput value={this.state.name} onInput={() => this.handleInput} />
					<Button onClick={() => this.handleClick} />
				</div>
				{this.state.isNameToShort && <div>Name to short</div>}
				{!isResultsListEmpty && <ul>{listItem}</ul>}
			</div>
		);
	}
}

async function fetchData(name) {
	const SERVER_URL = 'https://api.genderize.io';
	const url = `${SERVER_URL}?name=${name}`;

	const response = await fetch(url);
	const body = await response.json();

	return body;
}