import React from 'react';
import './flightDetail.scss';
import useApi from '../../hooks/useApi';
import Spinner from '../shared/spinner';
import Error from '../shared/error';
import FlightDetailBody from '../flightDetailBody';

const FlightDetail = ({ id }) => {
	 const url = id.replace('id=', '/');
	const { isLoading, response: flightInfo, error } = useApi(url);

	return (
		(isLoading && <Spinner />)
		|| (error && <Error text={error.message} />)
		|| (flightInfo && <FlightDetailBody flightInfo={flightInfo} />)
	);
};

export default FlightDetail;
