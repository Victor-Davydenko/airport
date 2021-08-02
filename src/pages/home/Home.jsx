import React, { useState } from 'react';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import SearchField from '../../components/search';
import FlightFilter from '../../components/flightFilter';
import FlightTable from '../../components/flightTable';
import { today } from '../../constants/constants';

const HomePage = () => {
	const [flightDirection, setFlightDirection] = useState('arrivals');
	const [chosenDate, setChosenDate] = useState(today);

	const chooseFlightDirection = (flightDirection) => {
		setFlightDirection(flightDirection);
	};
	const chooseDate = (options) => {
		const { date, pickedDay } = options;
		if (date) {
			setChosenDate(date);
		}
		if (pickedDay === 'yesterday') {
			setChosenDate(subDays(today, 1));
		}
		if (pickedDay === 'today') {
			setChosenDate(today);
		}
		if (pickedDay === 'tomorrow') {
			setChosenDate(addDays(today, 1));
		}
	};

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
