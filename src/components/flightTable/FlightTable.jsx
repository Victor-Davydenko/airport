import React from 'react';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

import './flightTable.scss';

import useApi from '../../hooks/useApi';
import FlightTableRow from './flightTableRow/FlightTableRow';
import Spinner from '../shared/spinner';
import Error from '../shared/error';

const FlightTable = () => {
	const flightDirection = useSelector((state) => state.flightDirectionReducer.flightDirection);
	const chosenDate = useSelector((state) => state.flightDateReducer.chosenDate);
	let searchValue = useSelector((state) => state.searchValueReducer.searchValue);
	const activeDate = format(chosenDate, 'dd-MM-yyyy');
	const { response: flights, isLoading, isError } = useApi(activeDate);

	const buildFlightTableBody = (flights) => {
		return flights[flightDirection].map((flight) => {
			const scheduledDate = format(Date.parse(flight.timeDepShedule || flight.timeToStand), 'dd-MM-yyyy');
			let direction = flight['airportToID.city'] || flight['airportFromID.city'];
			direction = direction.toLowerCase();
			searchValue = searchValue.toLowerCase();
			if (scheduledDate === activeDate && !searchValue) {
				return <FlightTableRow
					flight={flight}
					key={flight.ID}
					activeDate={activeDate}
				/>;
			}
			if (scheduledDate === activeDate && direction.includes(searchValue)) {
				return <FlightTableRow
					flight={flight}
					key={flight.ID}
					activeDate={activeDate}
				/>;
			}
		});
	};
	const flightTableBody = flights && buildFlightTableBody(flights);
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
