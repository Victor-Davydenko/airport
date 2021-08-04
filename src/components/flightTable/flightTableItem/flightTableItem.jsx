import React from 'react';
import format from 'date-fns/format';

import './flightTableItem.scss';

const FlightTableItem = ({ flight }) => {
	let statusToDisplay;
	let timeToDisplay;
	if (flight.status === 'DP') {
		statusToDisplay = 'Вилетів о ';
		timeToDisplay = format(Date.parse(flight.timeTakeofFact), 'H:mm');
	}
	if (flight.status === 'CK') {
		statusToDisplay = 'Реєстрація';
	}
	if (flight.status === 'CC') {
		statusToDisplay = 'Посадка';
	}
	if (flight.status === 'ON') {
		statusToDisplay = 'Вчасно';
	}
	if (flight.status === 'CX') {
		statusToDisplay = 'Скасовано';
	}
	if (flight.status === 'LN') {
		statusToDisplay = 'Прибув о ';
		timeToDisplay = format(Date.parse(flight.timeLandFact), 'H:mm');
	}
	if (flight.status === 'FR') {
		statusToDisplay = 'У польоті';
	}
	if (flight.status === 'DL') {
		statusToDisplay = 'Затримується до ';
		timeToDisplay = format(Date.parse(flight.timeLandCalc), 'H:mm');
	}
	return (
		<td>
			 {statusToDisplay}
			 {timeToDisplay}
		</td>
	);
};

export default FlightTableItem;
