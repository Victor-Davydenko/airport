import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

import './flightTableRow.scss';
import FlightTableItem from '../flightTableItem/flightTableItem';

const FlightTableRow = ({ flight, activeDate }) => {
	const scheduledTime = format(Date.parse(flight.timeDepShedule || flight.timeToStand), 'H:mm');
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
				<Link to={`/details/${activeDate}id=${flight.ID}`} className="table__link">Деталі рейсу</Link>
			</td>
		</tr>
	);
};

export default FlightTableRow;

// https://api.iev.aero/api/flights/05-08-2021/2000041930351
//
