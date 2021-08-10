import React from 'react';

import './noFlights.scss';

const NoFlights = () => {
	return (
		<tr>
			<td colSpan={6}>
				<p className='message'>Немає рейсів</p>
			</td>
		</tr>
	);
};

export default NoFlights;
