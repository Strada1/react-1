import React from 'react';
import '/src/Input/input.css'

class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input
				onChange={this.props.onChange}
				placeholder='Add Name'
				className="inputNameGenderize"
			/>
		)
	}
}

export { TextInput };