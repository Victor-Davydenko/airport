import React from 'react';
import { Link } from 'react-router-dom';
import './flightDetail.scss';
import FlightAware from '../../images/FlightAware.webp';

const FlightDetail = () => {
	return (
		<>
			<div className="row">
				<span className='text text--flight'>w355554 </span>
				<span className='text'>вилітає з</span><br />
				<span className='city-name'>Hanover</span>
				<Link to={''} className='nav-link nav-link--flightaware'>
					<img src={FlightAware} alt=""/>
				</Link>
			</div>
			<div className="row">
				<p>Інформація про рейс: </p>
				<table>
					<thead>
						<tr>
							<td>Дата</td>
							<td>Час</td>
							<td>Термінал</td>
							<td>Рейс</td>
							<td>Стійка</td>
							<td>Гейт</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>05.08</td>
							<td>22:15</td>
							<td>A</td>
							<td>W654256</td>
							<td>7</td>
							<td>A1</td>
						</tr>
					</tbody>
				</table>
				<p>Вилетів о 22:15, 05.08.21</p>
			</div>
		</>
	);
};

export default FlightDetail;
