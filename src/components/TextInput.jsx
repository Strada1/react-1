import React from 'react';

export default function TextInput({ value, setValue }) {
	const onChangeValue = evt => {
		setValue(evt.target.value);
	};
	return (
		<input onChange={onChangeValue} value={value} type="text" className="name" name="inputName" />
	);
}
