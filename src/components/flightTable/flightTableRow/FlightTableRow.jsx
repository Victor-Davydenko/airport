import React from 'react';
import format from 'date-fns/format';

import './flightTableRow.scss';
import FlightTableItem from '../flightTableItem/flightTableItem';

const FlightTableRow = ({ flight }) => {
	const scheduledTime = format(Date.parse(flight.timeDepShedule || flight.timeArrShedule), 'H:mm');
	return (
		<tr>
			<td>
				<span className='terminal'>{flight.term}</span>
			</td>
			<td>{scheduledTime}</td>
			<td>{flight['airportToID.city'] || flight['airportFromID.city']}</td>
			<FlightTableItem flight={flight} />
			<td>
				<img className='image' src={flight.airline.ua.logoSmallName} alt={flight.airline.ua.name}/>
				<span className='company'>{flight.airline.ua.name}</span>
			</td>
			<td>{flight.codeShareData[0].codeShare}</td>
			<td>
				<a href="" className="table__link">Деталі рейсу</a>
			</td>
		</tr>
	);
};

export default FlightTableRow;
