import React from 'react';

export default function InputText({ value, setValue }) {
	return (
		<input
			value={value}
			onChange={evt => setValue(evt.target.value)}
			type="text"
			className="new-task__text"
			placeholder="Добавить..."
		/>
	);
}
