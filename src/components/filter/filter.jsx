import React, { useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import './filter.scss';
import icon from '../../images/dateIcon.png';

const Filter = ({
	flightDirection,
	chosenDate,
	isYesterdayPicked,
	isTodayPicked,
	isTomorrowPicked,
	today,
	tomorrow,
	yesterday,
	chooseFlightDirection,
	chooseDate,
	pickDate,
}) => {
	const arrivalsClassNames = `filter__flights-list-item ${flightDirection === 'arrivals' ? 'filter__flights-list-item--active' : ''}`;
	const departureClassNames = `filter__flights-list-item ${flightDirection === 'departure' ? 'filter__flights-list-item--active' : ''}`;
	const yesterdayClassNames = `filter__date-list-item ${isYesterdayPicked ? 'filter__date-list-item--active' : ''}`;
	const todayClassNames = `filter__date-list-item ${isTodayPicked ? 'filter__date-list-item--active' : ''}`;
	const tomorrowClassNames = `filter__date-list-item ${isTomorrowPicked ? 'filter__date-list-item--active' : ''}`;
	const formatDateToString = (date) => {
		const day = date.toLocaleString().slice(0, 2);
		const month = date.toLocaleString().slice(3, 5);
		return `${day}/${month}`;
	};
	return (
		<div className='filter'>
			<div className="filter__row">
				<ul className="filter__flights-list">
					<li className={ departureClassNames } onClick={() => chooseFlightDirection('departure')}>
						<span>Виліт</span>
					</li>
					<li className={ arrivalsClassNames } onClick={() => chooseFlightDirection('arrivals')}>
						<span>Приліт</span>
					</li>
				</ul>
			</div>
			<div className="filter__row filter__date-row">
				<div className="calendar">
					<DatePicker selected={ chosenDate } onChange={(date) => chooseDate(date)}/>
					<img src={icon} alt="date-picker"/>
					 <span className='calendar__date'>{formatDateToString(chosenDate)}</span>
				</div>
				 <ul className="filter__date-list">
					<li className={yesterdayClassNames} onClick={() => pickDate('yesterday')}>
						<span className="date">{formatDateToString(yesterday)}</span>
						<span className="text">Вчора</span>
					</li>
					<li className={todayClassNames} onClick={() => pickDate('today')}>
						<span className="date">{formatDateToString(today)}</span>
						<span className="text">Сьогодні</span>
					</li>
					<li className={tomorrowClassNames} onClick={() => pickDate('tomorrow')}>
						<span className="date">{formatDateToString(tomorrow)}</span>
						<span className="text">Завтра</span>
					</li>
				 </ul>
			</div>
		</div>
	);
};

export default Filter;
