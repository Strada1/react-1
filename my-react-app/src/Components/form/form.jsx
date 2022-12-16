import React from 'react'
import './form.css'

import {GetGender} from "../getGender"

class Form extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className={this.props.divClassName}>
			  <form onSubmit={GetGender} className={this.props.formClassName}>
				  
			  </form>
			</div>
		)
	}
}

export { Form }
