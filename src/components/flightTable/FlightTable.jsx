import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';

import './flightTable.scss';

import httpService from '../../service';
import FlightTableRow from './flightTableRow/FlightTableRow';
import Spinner from '../shared/spinner';
import Error from '../shared/error';

const FlightTable = ({ activeDate, flightDirection, searchValue }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [flightsData, setFlightsData] = useState(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		httpService.getAllFlights(activeDate)
			.then((data) => {
				setIsLoading(false);
				setFlightsData(data.body);
			})
			.catch(() => {
				setIsLoading(false);
				setIsError(true);
			});
	}, [activeDate]);

	const buildFlightTableBody = (flights) => {
		return flights[flightDirection].map((flight) => {
			const scheduledDate = format(Date.parse(flight.timeDepShedule || flight.timeToStand), 'dd-MM-yyyy');
			let direction = flight['airportToID.city'] || flight['airportFromID.city'];
			direction = direction.toLowerCase();
			searchValue = searchValue.toLowerCase();
			if (scheduledDate === activeDate && !searchValue) {
				return <FlightTableRow
					flight={flight}
					key={flight.ID}/>;
			}
			if (scheduledDate === activeDate && direction.includes(searchValue)) {
				return <FlightTableRow
					flight={flight}
					key={flight.ID}/>;
			}
		});
	};
	const flightTableBody = flightsData && buildFlightTableBody(flightsData);
	if (isLoading) {
		return (
			<Spinner />
		);
	}
	if (isError) {
		return (
			<Error />
		);
	}
	return (
		<div className="wrapper">
			 <table className="table">
				<thead>
					<tr>
						<th>Термінал</th>
						<th>Розклад</th>
						<th>Призначення</th>
						<th>Статус</th>
						<th>Авіакомпанія</th>
						<th>Рейс</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{flightTableBody}
				</tbody>
			 </table>
		</div>
	);
};
export default FlightTable;
