import React from 'react';
import SearchField from '../../components/search';
import FlightFilter from '../../components/flightFilter';
import FlightTable from '../../components/flightTable';

const HomePage = () => {
	return (
		<>
			<SearchField />
			<FlightFilter />
			<FlightTable />
		</>
	);
};

export default HomePage;
