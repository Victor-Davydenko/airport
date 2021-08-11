import React from 'react';
import { Link } from 'react-router-dom';
import './flightDetailPage.scss';
import FlightDetail from '../../components/flightDetail';

const FlightDetailPage = ({ match: { params: { id } } }) => {
	return (
		<div className='wrapper flight-details'>
			<div className="flight-details__row">
				<Link to='/' className="flight-details__nav-link">Назад</Link>
			</div>
			<FlightDetail id={id}/>
		</div>
	);
};

export default FlightDetailPage;
