import './button.css';

export function Button({type, text}) {
	return (
		<button
			className='button'
			type={type}
		>
			{text}
		</button>
	);
};