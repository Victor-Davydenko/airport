import React from 'react';

import './navigationListItem.scss';

const NavigationListItem = ({ linkText }) => {
	return (
		<li className="navigation__list-item">
			<a href="#" className="navigation__link">{linkText}</a>
		</li>
	);
};

export default NavigationListItem;
