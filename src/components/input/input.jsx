import './input.css';

function TextInput(props) {
	function handleInput() {
		console.log('input')
	}

	return (
		<input
			className='input'
			type='text'
			placeholder={props.placeholder}
			onInput={handleInput}
		/>
	)
}

export default TextInput;