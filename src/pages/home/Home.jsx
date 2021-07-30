import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import SearchField from '../../components/search';
import FlightFilter from '../../components/flightFilter';
import FlightTable from '../../components/flightTable';

const HomePage = () => {
	const [flightDirection, setFlightDirection] = useState('arrivals');
	const [chosenDate, setChosenDate] = useState(new Date());

	const chooseFlightDirection = (flightDirection) => {
		setFlightDirection(flightDirection);
	};
	const chooseDate = (options) => {
		const { date, pickedDay } = options;
		if (date) {
			setChosenDate(date);
		}
		if (pickedDay === 'yesterday') {
			setChosenDate(new Date(today.setDate(today.getDate() - 1)));
		}
		if (pickedDay === 'today') {
			setChosenDate(today);
		}
		if (pickedDay === 'tomorrow') {
			setChosenDate(new Date(today.setDate(today.getDate() + 1)));
		}
	};
	const today = new Date();
	const activeDate = format(chosenDate, 'dd-MM-yyyy');
	const filterProps = {
		chooseFlightDirection,
		chooseDate,
		flightDirection,
		chosenDate,
	};
	return (
		<>
			<SearchField />
			<FlightFilter {...filterProps} />
			<FlightTable activeDate={activeDate}
									 flightDirection={flightDirection}
			/>
		</>
	);
};

export default HomePage;
