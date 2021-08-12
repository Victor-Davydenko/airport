import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import format from 'date-fns/format';

import './flightTable.scss';

import { getData } from '../../store/dataSlice';
import FlightTableRow from './flightTableRow/FlightTableRow';
import Spinner from '../shared/spinner';
import Error from '../shared/error';
import NoFlights from '../noFlights';

const FlightTable = () => {
	const dispatch = useDispatch();
	const flightDirection = useSelector((state) => state.flightDirectionReducer.flightDirection);
	const chosenDate = useSelector((state) => state.flightDateReducer.chosenDate);
	let searchValue = useSelector((state) => state.searchValueReducer.searchValue);
	const activeDate = format(chosenDate, 'dd-MM-yyyy');
	const { isLoading, flightData: flights, error } = useSelector((state) => state.flightDataReducer);
	useEffect(() => {
		dispatch(getData({ url: activeDate }));
	}, [activeDate]);
	const buildFlightTableBody = (flights) => {
		return flights[flightDirection].filter((flight) => {
			const scheduledDate = format(Date.parse(flight.timeDepShedule || flight.timeToStand), 'dd-MM-yyyy');
			let direction = flight['airportToID.city'] || flight['airportFromID.city'];
			direction = direction.toLowerCase();
			searchValue = searchValue.toLowerCase();
			return scheduledDate === activeDate && (!searchValue || direction.includes(searchValue));
		}).map((flight) => <FlightTableRow
			flight={flight}
			activeDate={activeDate}
			key={flight.ID}/>);
	};
	return (
		(isLoading && <Spinner />)
		|| (error && <Error text={error.message} />)
		|| (flights && <div className="wrapper">
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
					{buildFlightTableBody(flights).length ? buildFlightTableBody(flights) : <NoFlights />}
				</tbody>
			</table>
		</div>)
	);
};
export default FlightTable;
