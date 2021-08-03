import React, { useState, useEffect } from 'react';

import './flightTable.scss';

import httpService from '../../service';

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
				setData(data.body[flightDirection]);
			})
			.catch(() => {
				setIsLoading(false);
				setIsError(true);
			});
	}, [activeDate, flightDirection]);
	console.log(isLoading, data, isError, flightDirection);
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
					<tr>
						<td>
							<span className='terminal'>А</span>
						</td>
						<td>2:00</td>
						<td>Анталія</td>
						<td>Вилетів о 2:13</td>
						<td>
							<img className='image' src="https://api.iev.aero/media/airline/files/5b556bea9e8d9364778468.png" alt=""/>
							<span className='company'>WizzAir</span>
						</td>
						<td>7W9235</td>
						<td>
							<a href="" className="table__link">Деталі рейсу</a>
						</td>
					</tr>
					<tr>
						<td>
							<span className='terminal'>А</span>
						</td>
						<td>2:00</td>
						<td>Анталія</td>
						<td>Вилетів о 2:13</td>
						<td>
							<span className="image"><img src="" alt=""/></span>
			        WizzAir
						</td>
						<td>7W9235</td>
						<td>
							<a href="" className="table__link">Деталі рейсу</a>
						</td>
					</tr>
				</tbody>
			 </table>
		</div>
	);
};
export default FlightTable;
