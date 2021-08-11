import React from 'react';

import './flightTableItem.scss';
import { checkFlightStatus } from '../../../utils/utils';

const FlightTableItem = ({ flight }) => {
	const { statusToDisplay, timeToDisplay } = checkFlightStatus(flight);
	return (
		<td>
			 {statusToDisplay}
			 {timeToDisplay}
		</td>
	);
};

export default FlightTableItem;
