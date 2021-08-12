import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './flightDetail.scss';
import Spinner from '../shared/spinner';
import Error from '../shared/error';
import FlightDetailBody from '../flightDetailBody';
import { getFlightInfo } from '../../store/dataSlice';

const FlightDetail = ({ id }) => {
	const url = id.replace('id=', '/');
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFlightInfo({ url }));
	}, [url]);
	const { isLoading, flightInfo, error } = useSelector((state) => state.flightDataReducer);
	return (
		(isLoading && <Spinner />)
		|| (error && <Error text={error.message} />)
		|| (flightInfo && <FlightDetailBody flightInfo={flightInfo} />)
	);
};

export default FlightDetail;
