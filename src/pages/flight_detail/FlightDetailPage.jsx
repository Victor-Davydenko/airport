import React from 'react';
import { Link } from 'react-router-dom';
import './flightDetailPage.scss';
import FlightDetail from '../../components/flightDetail';

const FlightDetailPage = ({ match: { params: { id } } }) => {
	return (
		<div className='wrapper'>
			<div className="row">
				<Link to='/' className="nav-link">Назад</Link>
			</div>
			<FlightDetail id={id}/>
		</div>
	);
};

export default FlightDetailPage;
