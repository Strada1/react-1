import React from 'react';

import Button from './Button';
import TextInput from './TextInput';

import userImg from '../assets/user.png';

export default function Main() {
	return (
		<div className="container">
			<div className="form-wrap">
				<div className="profile">
					<img src={userImg} alt="User" />
				</div>
				<form>
					<label>
						Name:
						<TextInput />
					</label>
					<Button />
				</form>
			</div>
		</div>
	);
}
