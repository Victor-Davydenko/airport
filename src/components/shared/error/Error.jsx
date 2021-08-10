import React from 'react';

import './error.scss';

const Error = ({ text }) => {
	return (
		<div className='wrapper'>
			<div className='error'>
				<p>Сталася помилка. Спробуйте пізніше</p>
				<span className='error__message'>{text}</span>
			</div>
		</div>
	);
};

export default Error;
