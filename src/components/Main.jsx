import React, { useState } from 'react';

import Button from './Button';
import TextInput from './TextInput';

import userImg from '../assets/user.png';

export default function Main() {
	const [value, setValue] = useState('');

	const onLogIn = evt => {
		evt.preventDefault();
	};

	console.log(value);
	return (
		<div className="container">
			<div className="form-wrap">
				<div className="profile">
					<img src={userImg} alt="User" />
				</div>
				<form onSubmit={onLogIn}>
					<label>
						Name:
						<TextInput value={value} setValue={setValue} />
					</label>
					<Button />
				</form>
			</div>
		</div>
	);
}
