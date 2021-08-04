import React from 'react';
import format from 'date-fns/format';

import './flightTableItem.scss';

const FlightTableItem = ({ flight }) => {
	let statusToDisplay;
	let timeToDisplay;
	switch (flight.status) {
	case 'DP':
		statusToDisplay = 'Вилетів о ';
		timeToDisplay = format(Date.parse(flight.timeTakeofFact), 'H:mm');
		break;
	case 'CK':
		statusToDisplay = 'Реєстрація';
		break;
	case 'CC':
		statusToDisplay = 'Посадка';
		break;
	case 'ON':
		statusToDisplay = 'Вчасно';
		break;
	case 'CX':
		statusToDisplay = 'Скасовано';
		break;
	case 'LN':
		statusToDisplay = 'Прибув о ';
		timeToDisplay = format(Date.parse(flight.timeLandFact), 'H:mm');
		break;
	case 'FR':
		statusToDisplay = 'У польоті';
		break;
	case 'DL':
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
