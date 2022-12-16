import './input.css';

export function TextInput(props) {
	return (
		<input
			className='input'
			type='text'
			value={props.value}
			onInput={props.onInput()}
		/>
	)
}