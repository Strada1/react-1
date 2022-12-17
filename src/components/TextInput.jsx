import React from 'react';

export default function TextInput({ value, setValue }) {
	return (
		<input
			onChange={evt => setValue(evt.target.value)}
			value={value}
			type="text"
			className="name"
			name="inputName"
		/>
	);
}
