import React from 'react'
import { TextInput } from "./input/input"
import { Button } from "./button/button"
import {Main} from "../App/main"

class GetGender extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.submitForm = this.submitForm.bind(this);
		this.changeForm = this.changeForm.bind(this);
	}

	changeForm(event) {
		
	}

	submitForm(event) {
		
	}

	render() {
		return (
			<div className={this.props.divClassName}>
				<form onSubmit={this.submitForm} className={this.props.formClassName}>
					<TextInput value={this.state.value} onChange={this.changeForm} textInputClassName="inputNameGenderize"/>
					<Button buttonClassName="buttonSubmitGenderize"/>
				</form>
				<p>{this.state.value}</p>
		  	</div>
		);	
	}
}

export {GetGender}