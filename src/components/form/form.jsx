import React from 'react';
import { fetchData } from '../../services/fetchData.js';
import { Button } from '../button/button';
import './form.css';

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			gender: '',
			isInputValueShort: false,
			id: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(e) {
		this.setState({ inputValue: e.target.value });
	};

	async handleSubmit(e) {
		e.preventDefault();
		const MIN_CHARS_LENGTH = 2;
		const inputValue = this.state.inputValue;
		const isInputValueShort = inputValue.length <= MIN_CHARS_LENGTH;
		const id = this.state.id;

		if (isInputValueShort) {
			this.setState({ isInputValueShort });
			return;
		};

		const { gender } = await fetchData(inputValue);
		this.setState({ gender });
		this.setState({ isInputValueShort });
		this.setState({id: this.state.id + 1});
		this.props.getGender(inputValue, gender, id);
		this.setState({ gender: '' });
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
				<Button text='Get gender' />
			</form>
		);
	};
};