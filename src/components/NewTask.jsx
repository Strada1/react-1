import React from 'react';

import closeIcon from '../assets/close.png';

export default function NewTask() {
	return (
		<li className="item">
			<label className="item-label">
				<div className="check"></div>
				<span className="item-text">12412jgsaghakgjaksfgjasldnas,fmass, afsf asf afasfasfasf</span>
				<button>
					<img width={25} height={25} src={closeIcon} alt="Close" />
				</button>
			</label>
		</li>
	);
}
