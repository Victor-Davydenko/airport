import React, { useState } from 'react';
import format from 'date-fns/format';
import SearchField from '../../components/search';
import FlightFilter from '../../components/flightFilter';
import FlightTable from '../../components/flightTable';
import { today } from '../../constants/constants';

const HomePage = () => {
	const [chosenDate, setChosenDate] = useState(today);
	const [searchValue, setSearchValue] = useState('');
	const onFormSubmit = (e, searchValue) => {
		e.preventDefault();
		setSearchValue(searchValue);
	};
	const activeDate = format(chosenDate, 'dd-MM-yyyy');
	const filterProps = {
		setChosenDate,
		chosenDate,
	};
	return (
		<>
			<SearchField onFormSubmit={onFormSubmit} />
			<FlightFilter {...filterProps} />
			<FlightTable
				activeDate={activeDate}
				searchValue={searchValue}
			/>
		</>
	);
};

export default HomePage;
