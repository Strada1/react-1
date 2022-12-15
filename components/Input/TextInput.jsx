import React from 'react';
import '/src/components/Input/input.css'


class TextInput extends React.Component {
	render() {
		function showInput(event) {
			event.preventDefault();
			let TextInputValue = event.target.value;
			console.log(TextInputValue);
		}
		return (
			<input onInput={showInput} type="text" placeholder='Введите имя' className="inputNameGenderize " />
		)
	}
}

export default TextInput;