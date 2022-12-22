import React from 'react';

import InputText from './InputText';
import Button from './Button';

export default function CreateTask({ setIsHigh }) {
	const onClickSubmit = evt => {
		evt.preventDefault();
		console.log('click');
	};
	return (
		<form onSubmit={onClickSubmit} width="400px" height="45px">
			<div className="new-task">
				<InputText />
				<Button />
			</div>
		</form>
	);
}
