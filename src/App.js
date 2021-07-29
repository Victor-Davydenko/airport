import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './App.scss';

import Header from './components/header';
import SearchField from './components/search';
import FlightFilter from './components/flightFilter';
import FlightTable from './components/flightTable';
import Footer from './components/footer';

function App() {
	const [state, setState] = useState({
		flightDirection: 'arrivals',
		chosenDate: new Date(),
		isYesterdayPicked: false,
		isTodayPicked: true,
		isTomorrowPicked: false,
	});

	const {
		flightDirection,
		chosenDate,
		isYesterdayPicked,
		isTodayPicked,
		isTomorrowPicked,
	} = state;
	const today = moment(new Date())._d;
	const tomorrow = moment(new Date()).add(1, 'days')._d;
	const yesterday = moment(new Date()).add(-1, 'days')._d;
	useEffect(() => {
		const body = document.querySelector('body');
		body.addEventListener('mousemove', () => {
			body.classList.add('mouse-used');
		});

		body.addEventListener('keyup', (e) => {
			if (e.code === 'Tab') {
				if (body.classList.contains('mouse-used')) {
					body.classList.remove('mouse-used');
				}
			}
		});
	}, []);
	const chooseFlightDirection = (flightDirection) => {
		setState({
			...state,
			flightDirection,
		});
	};
	const chooseDate = (date) => {
		setState({
			...state,
			chosenDate: date,
			isTodayPicked: date === new Date(),
			isTomorrowPicked: false,
			isYesterdayPicked: false,
		});
	};
	const pickDate = (pickedDay) => {
		if (pickedDay === 'yesterday') {
			setState({
				...state,
				chosenDate: yesterday,
				isTodayPicked: false,
				isTomorrowPicked: false,
				isYesterdayPicked: true,
			});
		}
		if (pickedDay === 'today') {
			setState({
				...state,
				chosenDate: today,
				isTodayPicked: true,
				isTomorrowPicked: false,
				isYesterdayPicked: false,
			});
		}
		if (pickedDay === 'tomorrow') {
			setState({
				...state,
				chosenDate: tomorrow,
				isTodayPicked: false,
				isTomorrowPicked: true,
				isYesterdayPicked: false,
			});
		}
	};
	const activeDate = chosenDate.toLocaleDateString().slice(0, 10).replace(/\./g, '-');
	const filterProps = {
		chooseFlightDirection,
		chooseDate,
		pickDate,
		flightDirection,
		chosenDate,
		today,
		tomorrow,
		yesterday,
		isTodayPicked,
		isTomorrowPicked,
		isYesterdayPicked,
	};

	return (
		<div className="App">
			<Header />
			<div className="container">
				<SearchField />
				<FlightFilter {...filterProps}/>
				<FlightTable activeDate={activeDate}
										 flightDirection={flightDirection}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
