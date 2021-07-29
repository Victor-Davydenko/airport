import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './App.scss';

import Header from './components/header';
import SearchField from './components/search';
import Filter from './components/filter';
import Table from './components/table';
import Footer from './components/footer';

function App() {
	const [state, setState] = useState({
		searchValue: '',
		flightDirection: 'arrivals',
		chosenDate: new Date(),
		activeDate: new Date().toLocaleDateString().slice(0, 10).replace(/\./g, '-'),
		isYesterdayPicked: false,
		isTodayPicked: true,
		isTomorrowPicked: false,
	});

	const {
		searchValue,
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

	const onFormSubmit = (e, searchValue) => {
		e.preventDefault();
		setState({
			...state,
			searchValue,
		});
	};
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
				<SearchField onFormSubmit={onFormSubmit}/>
				<Filter {...filterProps}/>
				<Table activeDate={activeDate}
							 flightDirection={flightDirection}
							 searchValue={searchValue}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
