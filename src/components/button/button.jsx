import './button.css';

export function Button(props) {
	return (
		<button
			className='button'
		>
			{props.text}
		</button>
	);
};