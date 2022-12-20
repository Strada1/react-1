import React from 'react';
import { Form } from '../form/form.jsx';
import { List } from '../list/list.jsx';
import { fetchData } from '../../services/fetchData.js';

const DEFAULT_STATE = {
	value: '',
	id: 0,
	list: []
};

export class Genderize extends React.Component {
	constructor(props) {
		super(props);
		this.state = DEFAULT_STATE;
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	};

	onChange(value) {
		this.setState({ value })
	}

	async onSubmit() {
		const state = this.state;
		const value = state.value;
		const list = state.list.slice();
		const { gender } = await fetchData(value);
		list.push({ value, gender, id: state.id++ });
		this.setState({ list })
	}

	render() {
		const list = this.state.list;

		return (
			<div className='genderize'>
				<Form 
					value={this.state.value}
					onChange={this.onChange}
					onSubmit={this.onSubmit}
				/>
				<List isRender={list.length} list={list} />
			</div>
		);
	};
};