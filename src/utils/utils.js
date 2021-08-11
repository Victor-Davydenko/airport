import format from 'date-fns/format';

const classNames = (classNames) => classNames.join(' ');

const checkFlightStatus = (flight) => {
	let statusToDisplay;
	let timeToDisplay;
	let fullDateToDisplay;
	 switch (flight.status) {
	case 'DP':
		statusToDisplay = 'Вилетів о ';
		timeToDisplay = format(Date.parse(flight.timeTakeofFact), 'H:mm');
		fullDateToDisplay = format(Date.parse(flight.timeTakeofFact), 'dd.MM.yyyy');
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
		fullDateToDisplay = format(Date.parse(flight.timeLandFact), 'dd.MM.yyyy');
		break;
	case 'FR':
		statusToDisplay = 'У польоті';
		break;
	case 'DL':
		statusToDisplay = 'Затримується до ';
		timeToDisplay = format(Date.parse(flight.timeLandCalc), 'H:mm');
		fullDateToDisplay = format(Date.parse(flight.timeLandCalc), 'dd.MM.yyyy');
	}

	return { statusToDisplay, timeToDisplay, fullDateToDisplay };
};

const formatDateToDisplay = (date, pattern) => {
	return format(Date.parse(date), pattern);
};

export { classNames, checkFlightStatus, formatDateToDisplay };
