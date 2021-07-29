import React, { useState, useEffect } from 'react';

import './table.scss';

const Table = ({ searchValue, flightDirection, activeDate }) => {
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
export default Table;
