import React from 'react';
import { fetchData } from '../../services/fetchData.js';
import { Button } from '../button/button';
import './form.css';

const MIN_CHARS_LENGTH = 2;
const DEFAULT_STATE = {
	inputValue: '',
	isInputValueShort: false,
	id: 0
};

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = DEFAULT_STATE;
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(e) {
		this.setState({ inputValue: e.target.value });
	};

	async handleSubmit(e) {
		e.preventDefault();
		const inputValue = this.state.inputValue;
		const isInputValueShort = inputValue.length <= MIN_CHARS_LENGTH;

		if (isInputValueShort) {
			this.setState({ isInputValueShort });
			return;
		};

		const { gender } = await fetchData(inputValue);
		this.setState({ isInputValueShort, id: this.state.id + 1 });
		this.props.getGender(inputValue, gender, this.state.id++);
		this.setState({ inputValue: '' });
	};

	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<div className='form__row'>
					<input
						className='form__input'
						type='text'
						onChange={this.handleChange}
						value={this.state.inputValue}
					/>
					{this.state.isInputValueShort && <div className='form__error'>{this.props.errorText}</div>}
				</div>
				<Button type='submit' text='Get gender' />
			</form>
		);
	};
};