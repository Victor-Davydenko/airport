import React from 'react';

import './button.scss';

const Button = ({ type, className, text }) => {
	return (
		<button className={className} type={type}>{text}</button>
	);
};

export default Button;
