import React from 'react';

import './spinner.scss';

const Spinner = () => {
	return (
		<div className='spinner'>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
