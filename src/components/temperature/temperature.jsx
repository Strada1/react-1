import './temperature.css';

export function Temperature({ size, temperature }) {
	return (
		<div
			className={size ? `temperature temperature--size-${size}` : "temperature"}>
			{temperature}
		</div>
	);
}