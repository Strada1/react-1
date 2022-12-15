import './button.css';

function Button() {
	const BUTTON_TEXT = 'Get gender';

	function handleClick() {
		console.log('click');
	}

	return (
		<button
			className='button'
			onClick={handleClick}
		>
			{BUTTON_TEXT}
		</button>
	);
}

export default Button;