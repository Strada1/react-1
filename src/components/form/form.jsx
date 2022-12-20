import React from 'react';
import { Button } from '../button/button';
import './form.css';

const MIN_CHARS_LENGTH = 2;

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(e) {
		this.props.onChange(e.target.value);
	};

	async handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit();
	};

	render() {
		const valueLength = this.props.value.length;

		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<div className='form__row'>
					<input
						className='form__input'
						type='text'
						onChange={this.handleChange}
						value={this.props.value}
					/>
					{valueLength < MIN_CHARS_LENGTH && <div className='form__error'>Min 3 character</div>}
				</div>
				<Button type='submit' text='Get gender' />
			</form>
		);
	};
};