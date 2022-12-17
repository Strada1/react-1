import { useState } from 'react';

import Button from './Button';
import TextInput from './TextInput';

export default function Main() {
	const [value, setValue] = useState('');

	const serverUrl = 'https://api.genderize.io';

	function getNameAndGender(url) {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				alert(`${data.name[0].toUpperCase() + data.name.slice(1)} is ${data.gender}`);
			});
	}

	const onLogIn = evt => {
		evt.preventDefault();

		const url = `${serverUrl}?name=${value}`;

		getNameAndGender(url);
	};

	return (
		<form onSubmit={onLogIn}>
			<label>
				Name:
				{value.length < 2 && 'Введите больше символов'}
				<TextInput value={value} setValue={setValue} />
			</label>
			<Button />
		</form>
	);
}
