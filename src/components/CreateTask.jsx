import React from 'react';

import InputText from './InputText';
import Button from './Button';

export default function CreateTask({ submit, value, setValue }) {
	return (
		<form onSubmit={submit} width="400px" height="45px">
			<div className="new-task">
				<InputText value={value} setValue={setValue} />
				<Button />
			</div>
		</form>
	);
}
