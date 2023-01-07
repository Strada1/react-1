import { useState } from 'react';
import searchIcon from '../../assets/search.svg';
import { INITIAL_CITY, DEFAULT_CITY } from '../../const';
import './searchForm.css';

export function SearchForm({ updateWeather }) {
	const [value, setValue] = useState(DEFAULT_CITY);

	function handleSubmit(e) {
		e.preventDefault();
		if (!value) return;
		updateWeather(value);
		setValue(DEFAULT_CITY);
	}

	function handleChange(e) {
		setValue(e.target.value);
	}

	return (
		<form onSubmit={handleSubmit} className="search-form">
			<input
				onChange={handleChange}
				value={value}
				className="search-form__input"
				type="text"
				placeholder={INITIAL_CITY}
			/>
			<button className="search-form__button" type="submit">
				<img src={searchIcon} alt="search-icon" />
			</button>
		</form>
	)
}