import './button.css';

export function Button(props) {
	const BUTTON_TEXT = 'Get gender';

	return (
		<button
			className='button'
			onClick={props.onClick()}
		>
			{BUTTON_TEXT}
		</button>
	);
}