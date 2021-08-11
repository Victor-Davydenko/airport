import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './flightDetail.scss';
import useApi from '../../hooks/useApi';
import Spinner from '../shared/spinner';
import Error from '../shared/error';
import FlightDetailBody from '../flightDetailBody';
import { getData } from '../../store/dataSlice';

const FlightDetail = ({ id }) => {
	const url = id.replace('id=', '/');
	const { isLoading, response: flightInfo, error } = useApi(url);
	const dispatch = useDispatch();
	// const { isLoading, flightData: flightInfo, error } = useSelector((state) => state.flightDataReducer);
	useEffect(() => {
		dispatch(getData({ url }));
	}, [url]);

	return (
		(isLoading && <Spinner />)
		|| (error && <Error text={error.message} />)
		|| (flightInfo && <FlightDetailBody flightInfo={flightInfo} />)
	);
};

export default FlightDetail;
