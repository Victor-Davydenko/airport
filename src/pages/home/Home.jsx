import React, { useState } from 'react';
import format from 'date-fns/format';
import SearchField from '../../components/search';
import FlightFilter from '../../components/flightFilter';
import FlightTable from '../../components/flightTable';
import { today } from '../../constants/constants';

const HomePage = () => {
	const [flightDirection, setFlightDirection] = useState('arrivals');
	const [chosenDate, setChosenDate] = useState(today);
	const onFormSubmit = (e, searchValue) => {
		e.preventDefault();
		// setState({
		// 	...state,
		// 	searchValue,
		// });
	};

	const activeDate = format(chosenDate, 'dd-MM-yyyy');
	const filterProps = {
		setFlightDirection,
		setChosenDate,
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
