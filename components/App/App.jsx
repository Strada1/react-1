import React from 'react';
import TextInput from '../Input/TextInput';
import Button from '../Button/Button';


class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className='headerGenderize'>Enter your name</h1>
				<form className="container">
					<TextInput />
					<Button />
				</form>
			</div>
		)
	}
}

export default App;