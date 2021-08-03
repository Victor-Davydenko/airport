import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';

import './flightTable.scss';

import httpService from '../../service';
import FlightTableRow from './flightTableRow/FlightTableRow';

const FlightTable = ({ activeDate, flightDirection, searchValue }) => {
	const [state, setState] = useState({
		loading: true,
		data: null,
		error: null,
	});
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		httpService.getAllFlights(activeDate)
			.then((data) => {
				setIsLoading(false);
				setData(data.body);
			})
			.catch(() => {
				setIsLoading(false);
				setIsError(true);
			});
	}, [activeDate]);
	const tbody = data ? data[flightDirection].map((flight) => {
		const scheduledDate = format(Date.parse(flight.timeDepShedule || flight.timeArrShedule), 'dd-MM-yyyy');
		if (scheduledDate === activeDate) {
			return <FlightTableRow flight={flight} key={flight.ID} />;
		}
	}) : null;

	return (
		<div className="table-wrapper">
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
					{tbody}
				</tbody>
			 </table>
		</div>
	);
};
export default FlightTable;
