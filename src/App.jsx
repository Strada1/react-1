import React from 'react';
import { Form } from './components/form/form.jsx';
import { List } from './components/list/list.jsx';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
		this.getGender = this.getGender.bind(this);
	};

	getGender(name, gender, id) {
		const listItem = {name, gender, id};
		const list = this.state.list.slice();
		list.push(listItem);
		this.setState({list});
	};

	render() {
		const isListEmpty = !this.state.list.length;

		return (
			<div className='wrapper'>
				<Form getGender={this.getGender} errorText='Min 3 character'/>
				<List isRender={!isListEmpty} list={this.state.list}/>
			</div>
		);
	};
};