import React from 'react';
import { Genderize } from './components/genderize/genderize.jsx';

export class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<Genderize />
			</div>
		);
	};
};