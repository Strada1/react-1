import React from 'react';

export default function SearchCity({ value, setValue, submit }) {
	return (
		<form className="nav_search" onSubmit={submit}>
			<input
				value={value}
				onChange={evt => setValue(evt.target.value)}
				type="text"
				placeholder="Enter your city"
				className="nav_search__input"
			/>
			<button className="search">
				<svg
					className="nav_search__image"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="22"
					height="22">
					<g id="_01_align_center" data-name="01 align center">
						<path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
					</g>
				</svg>
			</button>
		</form>
	);
}
